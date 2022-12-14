import OrderModel from '../models/orderModel';
import statusCodes from '../statusCodes';

const orderModel = new OrderModel();

export default class OrderService {
  getAll = async () => {
    const data = await orderModel.getAll();

    return { status: statusCodes.OK, data };
  };
}