import file from './file';
import payment from './payment';
import user from './user';

export default app => {
  app.use('/file', file);
  app.use('/payment', payment);
  app.use('/user', user);
};
