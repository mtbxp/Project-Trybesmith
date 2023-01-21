// import BadRequest
import Products from '../interfaces/products.interface';
import ProductsModel from '../models/products.model';

class ProductsService {
  model: ProductsModel;

  constructor() {
    this.model = new ProductsModel();
  }

  async create(products: Products): Promise<Products> {
    const createProduct = await this.model.create(products);
    return createProduct;
  }
}

export default ProductsService;