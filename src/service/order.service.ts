import orderModel from '../models/order.model';

const listAllOrders = async () => {
  const allOrders = await orderModel.listAllOrders();

  return { type: null, data: allOrders };
};

export default { listAllOrders };