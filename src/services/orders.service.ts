import model from '../models/orders.model';
import { TOrder } from '../types';

async function createOrderService():Promise<TOrder[]> {
  const order = await model.createOrder();

  return order;
}

export default {
  createOrderService,
};