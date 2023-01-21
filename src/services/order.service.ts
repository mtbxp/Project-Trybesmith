import { validateNewOrder } from '../validations/validationsInputValues';
import { Order } from '../types';
import orderModel from '../models/order.model';

const getAll = async () => {
  const data = await orderModel.getAll();
  return {
    status: 200, 
    data,
  };
};

const create = async (orderWithToken: Order) => {
  const error = validateNewOrder(orderWithToken);
  if (error.type) {
    return {
      status: Number(error.type),
      error: { message: error.message },
    };
  }
  const data = await orderModel.create(orderWithToken);
  return {
    status: 201,
    data,
  };
};

export default {
  getAll,
  create,
};
