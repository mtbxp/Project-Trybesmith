import { OrderService } from '../interfaces';
import * as orderModel from '../models/order.model';

export async function getAll(): Promise<OrderService> {
  const [result] = await orderModel.getAll();

  return { status: 200, result };
}

export async function create(id: number, products: [number]) {
  const result = await orderModel.create(id, products);
  return { status: 201, result };
}