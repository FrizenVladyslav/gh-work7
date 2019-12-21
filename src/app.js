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
app.use(bodyParser());

app.use(express.static(path.join(__dirname, '../client')));

require('./loaders');
require('./api-routes').default(app);

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

app.use(require('./middlewares/errorHandler'));

app.listen(config.PORT, () => {
  console.log(`Server listen on port: ${config.PORT}`);
});
