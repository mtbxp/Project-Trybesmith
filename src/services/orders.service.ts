import ordersModel from '../models/orders.model';

const getAllOrders = async () => {
  const order = await ordersModel.getAllOrders();

  return order;
};

export default {
  getAllOrders,
};
