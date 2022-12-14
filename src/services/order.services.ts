import ordersModel from '../models/orders.models';

const getAllOrders = async () => {
  const orders = await ordersModel.getAllOrders();
  return { status: 200, orders };
};

export default {
  getAllOrders,
};
