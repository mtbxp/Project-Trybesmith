import ProductsModel from '../models/products.model';
import Tproduct from '../interfaces/product.interface';

class ProductsService {
  products;

  constructor() {
    this.products = new ProductsModel();
  }

  public getAll = async (): Promise<Tproduct[]> => {
    const prod = await this.products.getAll();
    return prod;
  };

  public create = async (product:Tproduct): Promise<Tproduct> => {
    const prod = await this.products.create(product);
    return prod;
  };
}

export default ProductsService;