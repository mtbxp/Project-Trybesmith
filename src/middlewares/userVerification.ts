import Joi from 'joi';

const userCheck = (body: object) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required().messages({
      'string.min': '"username" length greather than 2',
      'any.required': '"username" is required',
    }),
    password: Joi.string().min(3).required().messages({
      'string.min': '"password" length greather than 2',
      'any.required': '"password" is required',
    }),
  });
  return schema.validate(body);
};

export default userCheck;