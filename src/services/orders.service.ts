import Orders from '../interfaces/orders.interface';
import OrdersModel from '../models/orders.model';

class OrdersService {
  model: OrdersModel;

  constructor() {
    this.model = new OrdersModel();
  }

  public async getAll(): Promise<Orders[]> {
    const ordersAll = await this.model.getAll();
    return ordersAll;
  }
}

export default OrdersService;