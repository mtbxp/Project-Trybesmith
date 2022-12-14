import OrderModel from '../models/order.model';
import connection from '../models/connection';

export default class OrderService {
  public model;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll() {
    const orders = await this.model.getAll();
    return orders;
  }
}