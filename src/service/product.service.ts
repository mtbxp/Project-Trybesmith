import connection from '../model/connection';
import ProductModel from '../model/product.model';
import Product from '../interface/product.interface';

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