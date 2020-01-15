export default (validator, ...args) => (req, res, next) => {
  let validatorFnc;

  if (args.length > 0) {
    validatorFnc = validator(...args.map(arg => arg(req)));
  } else {
    validatorFnc = validator;
  }

  if (!validatorFnc(req.body)) {
    throw {
      name: 'ValidationError',
      message: validatorFnc.errors,
    };
  }
  next();
};
