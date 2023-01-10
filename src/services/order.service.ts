import ordersModel from '../models/orders.model';
// import Order from '../interfaces/order.interface';

const listAllOrders = async () => {
  const orders = await ordersModel.listAllOrders();
  return orders;
};

export default {
  listAllOrders,
};