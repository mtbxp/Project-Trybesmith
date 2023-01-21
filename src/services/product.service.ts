import connection from '../models/connection';
import ProductModel from '../models/products.model';
import Product from '../interfaces/products.interface';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const Products = await this.model.getAll();
    return Products;
  }

  public create(book: Product): Promise<Product> {
    return this.model.create(book);
  }
}

export default ProductService;