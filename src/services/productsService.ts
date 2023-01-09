import Product from '../models/productsModel';
import { ProductInferface } from '../interfaces/products.ifc';

export default class ProductsService {
  public newProduct = new Product();

  async create(product:ProductInferface):Promise<ProductInferface> {
    return this.newProduct.create(product);
  }

  async getAllProducts(): Promise <ProductInferface[]> {
    const allProducts = await this.newProduct.getAllProducts();
    return allProducts;
  }
}
