import connection from '../models/connection';
import ProductModel from '../models/products.models';
import Product from '../interfaces/product.interface';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAllProducts(): Promise<Product[]> {
    const products = await this.model.getAllProducts();
    return products;
  }

  public async createProduct(product: Product): Promise<Product> {
    const creationProduct = await this.model.createProduct(product);
    return creationProduct;
  }
}