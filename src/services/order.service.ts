import IOrder from '../interfaces/IOrder';
import OrderModel from '../models/order.model';

export default class OrderService {
  public orderModel = new OrderModel();

  public async getAllOrders(): Promise<IOrder[]> {
    const allOrders = await this.orderModel.getAllOrders();

    return allOrders;
  }
}