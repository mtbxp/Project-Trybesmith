import connection from '../models/connection';
import ProductModel from '../models/products.model';
import Product from '../interfaces/products.interface';

class ProductsService {
  public model: ProductModel;
  
  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAllProducts(): Promise<Product[]> {
    const products = await this.model.getAllProdutcs();
    return products;
  }
  
  public async createProduct(product: Product): Promise<Product> {
    const newProduct = await this.model.createProduct(product);
    return newProduct;
  }
}
  
export default ProductsService;