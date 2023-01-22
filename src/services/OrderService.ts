import Order from '../interfaces/orderInterface';
import OrderModel from '../models/OrderModel';

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