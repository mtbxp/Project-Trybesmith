import connection from '../models/connection';
import IProduct from '../interfaces/product.interface';
import ProductModel from '../models/product.model';

export default class ProductService {
  public model: ProductModel;
  
  constructor() {
    this.model = new ProductModel(connection);
  }

  async create(product: IProduct): Promise<IProduct> {
    const newProduct = await this.model.create(product);
    return newProduct;
  }
}