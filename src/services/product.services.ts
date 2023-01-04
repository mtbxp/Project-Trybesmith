import { IProduct } from '../interfaces/Product';
import connection from '../models/connection';
import ProductModel from '../models/product.model';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<IProduct[]> {
    const products = await this.model.findAll();
    return products;
  }

  public async create(product: IProduct): Promise<IProduct> {
    const productCreated = await this.model.create(product);
    return productCreated;
  }
}

export default ProductService;