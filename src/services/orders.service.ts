import orderModel from '../models/orders.model';

const getAllOrdersService = async () => {
  const allOrders = await orderModel.getAllOrdersModel();
  return allOrders;
};

const registerNewOrder = async (userId: number, productsIds: number[]) => {
  await orderModel.registerNewOder(userId, productsIds);

  return { userId, productsIds };
};

export default {
  getAllOrdersService,
  registerNewOrder,
};
