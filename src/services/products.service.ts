import connection from '../models/connection';
import ProductsModel from '../models/products.model';
import Product from '../interfaces/productInterface';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async createProduct(product: Product): Promise<Product> {
    const result = await this.model.createProduct(product);

    return result;
  }

  public async getAllProducts(): Promise<Product[]> {
    const result = await this.model.getAllProducts();

    return result;
  }
}
