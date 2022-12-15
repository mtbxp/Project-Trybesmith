import ordersModel from '../models/orders.model';

const selectAllOrderService = async () => {
  const allOrder = await ordersModel.selectAllOrdersModel();
  return allOrder;
};

export default { selectAllOrderService };