import { TOrder } from '../models/interfaces';
import orderModel from '../models/order.model';

const getAll = async (): Promise<TOrder[]> => {
  const orders = await orderModel.getAll();
  return orders;
};

export default { getAll };