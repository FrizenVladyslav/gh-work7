import file from './file';
import user from './user';

export default app => {
  app.use('/file', file);
  app.use('/user', user);
};
