import Orders from '../models/orders.models';
import { OrdersInterface } from '../interfaces/orders.interfaces';

const registerOrder = async (userId: number, productId: number[]) => {
  const newOrder = new Orders(userId, productId);
  const addedOrderId = await newOrder.save(userId, productId);

  const addedOrder = await new Orders(0, [0]).getAll().then((orders) => {
    const addOrder = orders.find((order) => order.id === addedOrderId);
    return addOrder;
  });

  return addedOrder as OrdersInterface;
};

const getAllOrders = async (): Promise<OrdersInterface[]> => {
  const orders = await new Orders(0, [0]).getAll();

  return orders as OrdersInterface[];
};

export { registerOrder, getAllOrders };