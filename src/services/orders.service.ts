import OrdersModel from '../models/orders.model';
import connection from '../models/connection';
import Orders from '../interfaces/orders.interfaces';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAllOrders(): Promise<Orders[]> {
    const orders = await this.model.getAllOrders();
    return orders;
  }
}