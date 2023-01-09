import IProduct from '../interfaces/IProduct';
import ProductModel from '../models/product.model';

export default class ProductService {
  public productModel = new ProductModel();

  public async getProductAll(): Promise<IProduct[]> {
    const ProductAll = await this.productModel.getProductAll();

    return ProductAll;
  }
}