import OrderModel from '../models/order.model';
import connection from '../models/connection';
import IOrder from '../interfaces/order.interface';

export default class OrderService {
  constructor(public model = new OrderModel(connection)) {}

  // public model: OrderModel;

  // constructor() {
  //   this.model = new OrderModel(connection);
  // }

  public async getAllOrders(): Promise<IOrder[]> {
    const allOrders = await this.model.getAllOrders();
    return allOrders;
  }
}