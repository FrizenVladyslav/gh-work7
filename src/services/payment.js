import stripe from 'stripe';
import { Container } from 'typedi';
import config from '../config';

class PaymentService {
  constructor(container) {
    this.stripe = stripe(config.STRIPE_SECRET);
    this.userService = container.get('userService');
  }

  async charge({ source, amount, user }) {
    await this.stripe.charges.create({
      source,
      amount: amount * 100,
      currency: 'usd',
      receipt_email: user.email,
    });
    await this.userService.replenishBalance(user.id, amount);
  }
}

export default new PaymentService(Container);
