import connection from '../models/connection';
import OrderModel from '../models/orderModel';
import { Order } from '../utils/interfaces/orderInterface';

export default class OrderService {
  constructor(public model = new OrderModel(connection)) { }

  public getAll = async (): Promise<Order[]> => {
    const orders = await this.model.getAll();
    return orders as Order[];
  };
}
