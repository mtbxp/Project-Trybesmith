import ordersModel from '../models/orders.model';
import { TBody, TOrderCreated } from '../types';

const getAll = async () => {
  const data = await ordersModel.getAll();
  return { status: 200, data };
};

const create = async (body: TBody): Promise<TOrderCreated> => {
  const { user: { id: userId }, productsIds } = body;
  const result = await ordersModel.create(userId, productsIds);
  return result;
};

export default {
  getAll,
  create,
};