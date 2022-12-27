import ProductModel from '../models/product.model';
import Product from '../interfaces/products.interface';
import connection from '../models/connection';

// funcoes retiradas do couse.

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public createProduct(product:Product):Promise<Product> {
    return this.model.createProduct(product);
  }

  public async getAllProducts(): Promise<Product[]> {
    const products = await this.model.getAllProducts();
    return products;
  }
}
