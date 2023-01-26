import Product from '../interface/product.interface';
import connection from '../models/connection';
import ProductModel from '../models/product.model';

export default class ProductService {
  public productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  public async create(product: Product): Promise<Product> {
    return this.productModel.create(product);
  }

  public async getAll(): Promise<Product[]> {
    return this.productModel.getAll();
  }
}
