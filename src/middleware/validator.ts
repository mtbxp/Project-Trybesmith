import createHttpError from 'http-errors';
// import { ErrorFormattingOptions } from 'joi';

const validators = require('../validators/index.j');

module.exports = (validator) => {
  if (!validators[validator]) throw new Error(`${validator} validator does not exist`);
  return async (req, _res, next) => {
    try {
      const validated = await validators[validator].validateAsync(req.body);
      req.body = validated;
      next();
    } catch (error: Err) {
      if (error.isJoi) { return next(createHttpError(422, { message: error.message })); }
      next(createHttpError(500));
    }
  };
};
