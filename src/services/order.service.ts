import orderModel from '../models/order.model';

const getAll = async () => {
  const data = await orderModel.getAll();
  return {
    status: 200, 
    data,
  };
};

export default {
  getAll,
};
