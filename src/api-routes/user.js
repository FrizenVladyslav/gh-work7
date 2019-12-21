import { Router } from 'express';
import { Container } from 'typedi';

const router = new Router();

const userService = Container.get('userService');

router.get('/', async (req, res) => {
  const users = await userService.findAll();
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await userService.findOne(id);
  return res.json(user);
});

router.post('/', async (req, res) => {
  const { body } = req;
  const user = await userService.create(body);
  res.status(201).json(user);
});

router.patch('/:id', async (req, res) => {
  const { params, body } = req;
  const user = await userService.update(params.id, body);
  res.json(user);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await userService.delete(id);
  res.sendStatus(204);
});

export default router;
