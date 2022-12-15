import { InterfaceOrder } from '../interfaces';
import ordersModel from '../models/orders.models';

const getAllOrders = async () => {
  const orders = await ordersModel.getAllOrders();
  return { status: 200, orders };
};

const addOrder = async (order: InterfaceOrder) => {
  await ordersModel.addOrder(order);
  return { status: 201, result: order };
};

export default {
  getAllOrders,
  addOrder,
};
