import Joi from 'joi';
import { Request, Response } from 'express';

import * as ordersService from '../services/orders.service';

const createOrderSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number()).required(),
});

async function createOrder(request: Request, response: Response): Promise<Response> {
  const { id: userId } = (request as Request & { user: { id: number } }).user;
  const { value, error } = createOrderSchema.validate(request.body);

  if (error) {
    const checks: RegExp[] = [/must be a/, /must be greater than/, /length must be at least/];
    let status = 400;

    if (checks.some((reg) => reg.test(error.message))) {
      status = 422;
    }

    return response.status(status).json({ message: error.message });
  }
  
  if (value.productsIds.length <= 0) {
    return response.status(422).json({ message: '"productsIds" must include only numbers' });
  }

  const order = await ordersService.createOrder({ ...value, userId });

  return response.status(201).json(order);
}

async function getAllOrders(request: Request, response: Response): Promise<Response> {
  const orders = await ordersService.getAllOrders();

  return response.json(orders);
}

export { createOrder, getAllOrders };
