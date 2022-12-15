import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).required().messages({
  'string.empty': '{#label} is required',
});

export default loginSchema;