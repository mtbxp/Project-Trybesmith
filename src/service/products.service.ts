import ProductsModel from '../models/products.model';
import connection from '../models/connection';
import Product from '../interfaces/product.interface';

export default class ProductService {
  public models: ProductsModel;

  constructor() {
    this.models = new ProductsModel(connection);
  }

  public async createProducts(product: Product):Promise<Product> {
    const result = await this.models.createProducts(product);
    return result;
  }
}