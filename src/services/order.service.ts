import ordersModel from '../models/orders.model';
import { Order, OrderCreated } from '../interfaces/product';
import { Body } from '../interfaces/user';

const getAllOrders = async (): Promise<Order[]> => {
  const orders: Order[] = await ordersModel.getAllOrders();
  return orders;
};

const newOrder = async (body: Body):Promise<OrderCreated> => { 
  const { currentUser, productsIds } = body;
  const result = await ordersModel.newOrder(currentUser, productsIds);
  return result;
};

export default {
  getAllOrders,
  newOrder,
};