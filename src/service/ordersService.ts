import connection from '../models/connection';
import OrderModel from '../models/ordersModel';
import { AllOrders } from '../interfaces';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async allGetOrders(): Promise<AllOrders[]> {
    const allOrders = await this.model.allGetOrders();
    return allOrders as AllOrders[];
  }
}