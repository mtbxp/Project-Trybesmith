import Order from '../interfaces/order.Interface';
import OrderModel from '../models/Order.Model';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.model.getAll();
    return result;
  }
}