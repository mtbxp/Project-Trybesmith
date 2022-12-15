import ProductModel from '../models/product.model';
import connection from '../models/connection';
import { IProduct } from '../interfaces/product.interface';

export default class ProductService {
  public models: ProductModel;

  constructor() {
    this.models = new ProductModel(connection);
  }

  public async createProducts(product: IProduct):Promise<IProduct> {
    const response = await this.models.createProducts(product);
    return response;
  }
}