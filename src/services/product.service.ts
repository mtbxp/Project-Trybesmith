import Product from '../models/product.model';
import { ProductInterface } from '../interfaces/product.interface';

export default class ProductService {
  public newProduct = new Product();

  async create(product:ProductInterface): Promise<ProductInterface> {
    return this.newProduct.create(product);
  }

  async getProducts(): Promise<ProductInterface[]> {
    const products = await this.newProduct.getProducts();
    return products;
  }
}
