import { TOrders } from '../models/interfaces';
import OrdersModel from '../models/orders.model';

const getAllOrders = async (): Promise<TOrders[]> => {
  const allOrders = await OrdersModel.selectAllOrders();  
  return allOrders;
};

export default { getAllOrders };