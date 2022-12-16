import joi from 'joi';

export const loginSchema = joi.object({
  username: joi.string().required(),
  password: joi.string().required(),
});

export const lintFix = () => {};