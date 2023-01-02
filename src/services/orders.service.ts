import orderModel from '../models/orders.model';

const getAllOrdersService = async () => {
  const allOrders = await orderModel.getAllOrdersModel;
  return allOrders;
};

export default {
  getAllOrdersService,
};
