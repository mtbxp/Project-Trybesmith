import ordersModel from '../models/ordersModel';

const getAllOrders = async () => {
  const orders = await ordersModel.getAllOrders();
  
  return orders;
};

export default {
  getAllOrders,
};
