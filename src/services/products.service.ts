import IProduct from '../interfaces/IProduct';
import ProductModel from '../models/product.model';

export default class ProductService {
  public productModel = new ProductModel();

  public async getAllProducts(): Promise<IProduct[]> {
    const allProducts = await this.productModel.getAllProducts();

    return allProducts;
  }
}