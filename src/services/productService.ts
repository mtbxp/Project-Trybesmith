import { IProduct } from '../interfaces/IProduct';
import ProductModel from '../models/productModel';

export default class ProductService {
  public product = new ProductModel();

  async create(productData:IProduct):Promise<IProduct> {
    return this.product.create(productData);
  }
}