import ProductsModel from '../models/products.model';
import Products from '../interfaces/products.interface';

class ProductsService {
  model: ProductsModel;

  constructor() {
    this.model = new ProductsModel();
  }

  async create(products: Products): Promise<Products> {
    const createProduct = await this.model.create(products);
    return createProduct;
  }

  public async getAll(): Promise<Products[]> {
    const productsAll = await this.model.getAll();
    return productsAll;
  }
}

export default ProductsService;