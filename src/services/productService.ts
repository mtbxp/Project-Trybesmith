import connection from '../models/connection';
import ProductModel from '../models/productModel';
import { Product } from '../models/interfaces/productInterface';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create(product: Product): Promise<Product> {
    return this.model.create(product);
  }
}