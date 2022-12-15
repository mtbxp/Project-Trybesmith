import OrderModel from '../models/orderModel';
import statusCodes from '../statusCodes';

const orderModel = new OrderModel();

export default class OrderService {
  getAll = async () => {
    const data = await orderModel.getAll();

    return { status: statusCodes.OK, data };
  };

  create = async (productsIds: number[], userId: number) => {
    await orderModel.create(productsIds, userId);

    return { status: statusCodes.CREATED, data: { userId, productsIds } };
  };
}