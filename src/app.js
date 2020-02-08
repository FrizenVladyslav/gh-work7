import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import swaggerUi from 'swagger-ui-express';
import config from './config';

const app = express();

app.use(compression());
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client')));

(async () => {
  await require('./loaders').default();
  require('./middlewares/passport');
  require('./api-routes').default(app);

  app.use(require('./middlewares/errorHandler').default);

  if (!config.IS_PODUCTION) {
    app.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(require('./swagger.json')),
    );
  }
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
  });

  app.listen(config.PORT, () => {
    console.log(`Server listen on port: ${config.PORT}`);
  });
})();
