import ProductsModel from '../models/products.model';
import Product from '../interfaces/product.interface';
import connection from '../models/connection';

export default class ProductService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }

  public async create(product: Product): Promise<Product> {
    const createdProduct = await this.model.create(product);
    return createdProduct;
  }
}
