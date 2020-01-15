import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Container } from 'typedi';

const userService = Container.get('userService');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    (email, password, done) => {
      userService
        .findOne({ email })
        .then(user => {
          if (!user || !user.validatePassword(password)) {
            return done(null, false, {
              errors: { 'email or password': 'is invalid' },
            });
          }
          return done(null, user);
        })
        .catch(done);
    },
  ),
);
