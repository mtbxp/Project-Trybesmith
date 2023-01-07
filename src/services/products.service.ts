import IServices from '../interfaces/services.interface';
import { ProductsModel } from '../models';
import connection from '../models/connection';

export default class ProductsService {
  public productsModel: ProductsModel;

  constructor() {
    this.productsModel = new ProductsModel(connection);
  }

  public getAll = async (): Promise<IServices> => {
    const message = await this.productsModel.getAll();

    if (message) return { type: null, message };

    return { type: 'NOT_FOUND', message: 'Not found any product' };
  };
}