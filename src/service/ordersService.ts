import OrderModel from '../models/ordersModel';
import connection from '../models/connection';
import { AllOrders, INewOrder } from '../interfaces';

export default class OrderService {
  constructor(public model = new OrderModel(connection)) {}

  public async allGetOrders(): Promise<AllOrders[]> {
    const allOrders = await this.model.allGetOrders();
    return allOrders as AllOrders[];
  }

  public async createOrder(userId: number, input: number[]): Promise<INewOrder> {
    const newOrder = await this.model.createOrder(userId, input);
    return newOrder;
  }
}