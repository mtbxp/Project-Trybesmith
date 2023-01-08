import ordersModel from '../models/orders.model';
import IOrders from '../interfaces/orders.interface';

const getAllOrders = async (): Promise<IOrders[]> => {
  const orders: IOrders[] = await ordersModel.getAllOrders();
  return orders;
};

export default {
  getAllOrders,
};