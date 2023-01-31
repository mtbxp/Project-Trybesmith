import { Orders } from '../interfaces/orders.interface';
import OrdersModel from '../models/orders.model';
import statusCodes from '../statusCodes';

class OrdersService {
  model: OrdersModel;

  constructor() {
    this.model = new OrdersModel();
  }

  async create(orders: any) {
    const { productsIds, userId } = orders;
    // if (!userId.id) {

    // }
    const result = await this.model.create(productsIds, userId.id);
    // console.log(!userId.id, 'result id service */*/*/*/*/');
    return {
      status: statusCodes.CREATED,
      result,
    };
  }
  
  public async getAll(): Promise<Orders[]> {
    const ordersAll = await this.model.getAll();
    return ordersAll;
  }
}

export default OrdersService;