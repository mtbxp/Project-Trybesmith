import Joi from 'joi';

const orderCheck = (body: object) => {
  const schema = Joi.object({
    productsIds: Joi.array()
      .items(Joi.number().required())
      .required(),
  }).messages({
    'any.required': '"productsIds" is required',
    'array.base': '"productsIds" must be an array',
    'array.includesRequiredUnknowns': '"productsIds" must include only numbers',
  });
  
  return schema.validate(body);
};

export default orderCheck;
