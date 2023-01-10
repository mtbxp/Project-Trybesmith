import ordersModel from '../models/orders.model';
import HttpException from '../shared/http.exception';
import { TNewOrder } from '../types';
import { status } from '../utils/status';

const getOrdersService = async ():Promise<object[]> => {
  try {
    const orders = await ordersModel.getOrders();
    return orders;
  } catch (error) {
    throw new HttpException(status.ERROR, 'Cannot find orders');
  }
};

const createOrderService = async (newOrder:TNewOrder) => {
  const newOrderCreated = await ordersModel.createOrder(newOrder);

  if (!newOrderCreated) {
    throw new HttpException(status.FAILED, 'Fail on creating order');
  }
  return newOrderCreated;
};

export default { getOrdersService, createOrderService };