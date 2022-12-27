import ProductModel from '../models/product.model';
import Products from '../interfaces/products.interface';
import connection from '../models/connection';

// funcoes retiradas do couse.

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create(product:Products):Promise<Products> {
    return this.model.createProduct(product);
  }
}
