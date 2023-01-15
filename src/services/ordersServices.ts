import { TOrder } from '../models/allInterfaces/interfaceOrder';
import orderModel from '../models/ordersModel';

const getOrderService = async (): Promise<TOrder[]> => {
  const orders = await orderModel.getOrderModel();
  return orders;
};

export default { getOrderService };