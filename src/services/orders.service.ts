import { Orders } from '../interfaces/interfaces';
import ordersModel from '../models/orders.model';

const getAllOrders = async ():Promise<Orders[]> => {
  const getOrders = await ordersModel.getAllOrders();
  return getOrders;
};

export default { 
  getAllOrders,
};