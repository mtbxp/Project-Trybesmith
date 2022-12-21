import { IProduct, IProductReturn } from '../interfaces';
import connection from '../models/connection';
import ProductModel from '../models/product.model';

export default class ProductService {
  productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  async addProduct(productData: IProduct): Promise<IProductReturn> {
    const newProduct = await this.productModel.addProduct(productData);
    return { status: 201, message: newProduct };
  }
}