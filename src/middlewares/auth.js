import jwt from 'jsonwebtoken';
import config from '../config';

export const authRequired = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization || authorization.split(' ')[0] !== 'Bearer') {
      throw new Error('unauthorized');
    }
    const decoded = jwt.verify(authorization.split(' ')[1], config.JWT_SECRET);
    if (!decoded.id) {
      throw new Error('unauthorized');
    }
    req.user = decoded;
    next();
  } catch (e) {
    return res.sendStatus(401);
  }
};

export const isUserAdmin = async (req, res, next) => {
  const { role } = req.user;
  return role === 'admin' ? next() : res.sendStatus(403);
};
