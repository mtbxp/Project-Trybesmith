import joi from 'joi';

const orderSchema = joi.array().items(joi.number().min(1).required()).required().messages({
  'any.required': '"productsIds" is required',
  'array.includesRequiredUnknowns': '"productsIds" must include only numbers', 
  'array.base': '"productsIds" must be an array',
});

const validateOrder = (product: number[]) => {
  const { error } = orderSchema.validate(product);
  if (error) return error.details[0].message;
};

export default validateOrder;