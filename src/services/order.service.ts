import { BadRequestError, UnprocessableEntityError } from 'restify-errors';
import connection from '../models/connection';
import OrderModel from '../models/order.model';
import ProductModel from '../models/product.model';
import { Order, FullOrder } from '../interfaces/order.interface';
import { validateProductsIdsArr } from './validations/validateFields';

class OrderService {
  public mainModel: OrderModel;

  public secondaryModel: ProductModel;

  constructor() {
    this.mainModel = new OrderModel(connection);
    this.secondaryModel = new ProductModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.mainModel.getAll();
    return orders;
  }

  public async create(order: FullOrder): Promise<FullOrder> {
    const message = await validateProductsIdsArr(order.productsIds);

    if (message !== null) {
      if (message.includes('required')) throw new BadRequestError(message);
      throw new UnprocessableEntityError(message);
    }

    const createdOrder = await this.mainModel.create(order);

    const inserts = order.productsIds.map(async (id) => {
      await this.secondaryModel.partialUpdate(Number(createdOrder.id), id);
    });

    await Promise.all(inserts);

    const { productsIds } = order;

    return { ...createdOrder, productsIds };
  }
}

export default OrderService;