import model from '../models/orders.model';
import { Orders } from '../types';

const getAllOrders = async (): Promise<Orders[]> => {
  const allOrderss = await model.getAllOrders();
  return allOrderss; 
};

export default {
  getAllOrders,
};