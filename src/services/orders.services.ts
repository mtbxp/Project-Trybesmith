import Orders from '../models/orders.models';
import { OrdersInterface } from '../interfaces/orders.interfaces';

const getAllOrders = async (): Promise<OrdersInterface[]> => {
  const orders = await new Orders(0, [0]).getAll();

  return orders as OrdersInterface[];
};

const registerOrder = async (userId: number, productId: number[]) => {
  const newOrder = new Orders(0, [0]);
  const addedOrderId = await newOrder.save(userId, productId);

  const allOrders = await getAllOrders();

  const addedOrder = allOrders.find((order) => order.id === addedOrderId);

  return addedOrder;
};

export { registerOrder, getAllOrders };