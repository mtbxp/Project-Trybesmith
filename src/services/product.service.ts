import connection from '../models/connection';
import ProductModel from '../models/product.model';
import Product from '../interfaces/product.interface';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll():Promise<Product[]> {
    const products = await this.model.getAll();
    return products; 
  }

  public async createProduct(product:Product):Promise<Product> {
    const result = await this.model.createProduct(product);  
    return result;
  }
}
