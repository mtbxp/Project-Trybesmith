// import { Orders, UserOrdersResponse } from '../interfaces/orders.interface';
import { Orders } from '../interfaces/orders.interface';
import OrdersModel from '../models/orders.model';
// import statusCodes from '../statusCodes';

class OrdersService {
  model: OrdersModel;

  constructor() {
    this.model = new OrdersModel();
  }

  public async getAll(): Promise<Orders[]> {
    const ordersAll = await this.model.getAll();
    return ordersAll;
  }

  // public async create(userId: number, productsIds: number[]): Promise<UserOrdersResponse> {
  //   const ordersCreate = await this.model.create(userId, productsIds);
  //   return { statusCode: statusCodes.CREATED, message: ordersCreate };
  // }
}

export default OrdersService;