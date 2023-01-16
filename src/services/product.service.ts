// ./src/interfaces/product.service.ts

import ProductInterface from '../interfaces/ProductInterface';
import ProductModel from '../models/product.model';

export default class ProductService {
  public product = new ProductModel();

  async create(productData:ProductInterface):Promise<ProductInterface> {
    return this.product.create(productData);
  }

  async getProducts(): Promise <ProductInterface[]> {
    const products = await this.product.getProducts();
    return products;
  }
}
