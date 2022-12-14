import connection from '../models/connection';
import ProductsModel from '../models/products.model';
import Product from '../interfaces/productInterface';

export default class ProductService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async createProduct(product: Product): Promise<Product> {
    const result = await this.model.createProduct(product);

    return result;
  }
}
