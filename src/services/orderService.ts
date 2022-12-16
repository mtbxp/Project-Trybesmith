import orderModel from '../models/orderModel';

const getAllOrders = async () => {
  const allOrders = await orderModel.getAllOrders();

  return { statusCode: 200, allOrders };
};

export default {
  getAllOrders,
};