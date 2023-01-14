import ordersModel from '../models/orders.model';

const getAllOrders = async () => {
  const result = await ordersModel.getAllOrders();
  return { statusErro: null, response: result };
};

export default {
  getAllOrders,
};