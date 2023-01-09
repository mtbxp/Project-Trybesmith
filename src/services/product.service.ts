import IProduct from '../interfaces/IProduct';
import ProductModel from '../models/product.model';

export default class ProductService {
  public productModel = new ProductModel();

  public async getProductAll(): Promise<IProduct[]> {
    const ProductAll = await this.productModel.getProductAll();

    return ProductAll;
  }

  public async productInsert(product: IProduct): Promise<IProduct> {
    const newProduct = await this.productModel.productInsert(product);

    return newProduct;
  }
}