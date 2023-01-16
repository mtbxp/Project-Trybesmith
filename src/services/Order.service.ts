import OrderModel from '../models/Order.model';
import { OrderReturned } from '../utils/types/Order.types';

export default class OrderService {
  constructor(private model: OrderModel) {
    this.model = model;
  }

  public async getAll(): Promise<OrderReturned[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}
