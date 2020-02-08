import { Router } from 'express';
import { Container } from 'typedi';
import { authRequired } from '../middlewares/auth';

const router = new Router();

const paymentService = Container.get('paymentService');

router.post('/pay', authRequired, async (req, res) => {
  const {
    body: { token: source, amount },
    query: { returnUrl },
    user,
  } = req;
  try {
    await paymentService.charge({ source, amount, user });
  } finally {
    res.send(returnUrl);
  }
});

export default router;
