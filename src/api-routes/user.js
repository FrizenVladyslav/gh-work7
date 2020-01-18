import { Router } from 'express';
import passport from 'passport';
import { Container } from 'typedi';
import validate from '../middlewares/validate';
import * as validator from '../validators/user';
import { authRequired, isUserAdmin } from '../middlewares/auth';

const router = new Router();

const userService = Container.get('userService');

router.get('/', authRequired, async (req, res) => {
  const users = await userService.findAll();
  res.json(users);
});

router.get('/info', authRequired, async (req, res) => {
  if (!req.user || !req.user.id) return res.json(null);

  const { id } = req.user;
  const user = await userService.findOne({ _id: id });
  const userInfo = user.getUserInfo();
  res.json(userInfo);
});

router.get('/statistic', async (req, res) => {
  const count = await userService.statistic();
  res.json(count);
});

router.get('/:id', authRequired, async (req, res) => {
  const { id } = req.params;
  const user = await userService.findOne({ _id: id });
  res.json(user);
});

router.post(
  '/',
  validate(validator.create),
  authRequired,
  isUserAdmin,
  async (req, res) => {
    const { body } = req;

    const user = await userService.create(body);
    res.status(201).json(user);
  },
);

router.post('/bulk/:filename', async (req, res) => {
  const { filename } = req.params;
  const insertedIds = await userService.createBulk(filename, res);

  res.json(insertedIds);
});

router.post('/register', validate(validator.create), async (req, res) => {
  const { password, ...rest } = req.body;

  const user = await userService.create({ ...rest, role: 'user' });
  user.setPassword(password);
  await user.save();

  res.json(user);
});

router.post('/login', (req, res, next) => {
  return passport.authenticate(
    'local',
    { session: false },
    (err, passportUser, info) => {
      if (err) {
        return res.status(400).json({ message: 'Login or password incorrect' });
      }
      if (passportUser) {
        return res.json({
          ...passportUser.getUserInfo(),
          token: passportUser.generateJWT(),
        });
      }
      return res.status(400).json({ info });
    },
  )(req, res, next);
});

router.patch(
  '/:id',
  validate(validator.update),
  authRequired,
  async (req, res) => {
    const { params, body } = req;
    const user = await userService.update({ _id: params.id }, body);
    res.json(user);
  },
);

router.delete('/:id', authRequired, isUserAdmin, async (req, res) => {
  const { id } = req.params;
  await userService.delete(id);
  res.sendStatus(204);
});

export default router;
