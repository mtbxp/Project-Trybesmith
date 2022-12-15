import connection from '../models/connection';
import OrderModel from '../models/orders.model';
import Order from '../interfaces/orders.interface';

class OrdersService {
  public model: OrderModel;
  
  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAllOrder(): Promise<Order[]> {
    const products = await this.model.getAllOrders();
    return products;
  }  
}
  
export default OrdersService;