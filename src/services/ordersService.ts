import ordersModel from '../models/ordersModel';
import { Order, OrderCreated } from '../interfaces/Product';
import { Body } from '../interfaces/User';

const getAllOrders = async (): Promise<Order[]> => {
  const orders: Order[] = await ordersModel.getAllOrders();
  return orders;
};

const addOrder = async (body: Body):Promise<OrderCreated> => { 
  const { currentUser, productsIds } = body;
  const result = await ordersModel.addOrder(currentUser, productsIds);
  return result;
};

export default {
  getAllOrders,
  addOrder,
};
