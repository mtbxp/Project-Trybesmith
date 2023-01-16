import connection from '../models/connection';
import OrderModel from '../models/orders.model';
import { Order } from '../interfaces';

export default class OrderService {
  public orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  public getAll = async (): Promise<Order[]> => {
    const orders = await this.orderModel.getAll();
    return orders;
  };
}