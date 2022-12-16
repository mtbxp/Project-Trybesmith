import { getOrders, addOrder } from '../models/order.model';

export const getAll = async () => {
  const orders = await getOrders();
  return orders;
};

export const addNewOrder = async (productsIds: number[], userId: number) => {
  const newOrder = await addOrder(productsIds, userId);
  return newOrder;
};