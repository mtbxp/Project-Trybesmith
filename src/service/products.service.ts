import connection from '../models/connection';
import ProductModel from '../models/product.model';
import { Product } from '../types/Product';

export default class ProductsService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async registerProduct(product: Product): Promise<Product> {
    const newProduct = await this.model.registerProduct(product);
    return newProduct;
  }

  public async getAllProducts(): Promise<Product[]> {
    const products = await this.model.getAllProducts();
    return products;
  }
}