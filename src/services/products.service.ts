import connection from '../models/connection';
import ProductModel from '../models/products.model';
import { Product } from '../interfaces';

export default class ProductService {
  public productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  public async create(product: Product): Promise<Product> {
    const createProduct = await this.productModel.create(product);
    return createProduct;
  }
}