import IOrder from '../interfaces/IOrder';
import OrderModel from '../models/order.model';

export default class OrderService {
  public orderModel = new OrderModel();

  public async getOrderAll(): Promise<IOrder[]> {
    const orderAll = await this.orderModel.getOrderAll();

    return orderAll;
  }
}