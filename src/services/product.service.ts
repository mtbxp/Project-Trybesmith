import { BadRequestError, UnprocessableEntityError } from 'restify-errors';
import connection from '../models/connection';
import ProductModel from '../models/product.model';
import Product from '../interfaces/product.interface';
import { validateNewProduct } from './validations/validateFields';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }

  public async create(product: Product): Promise<Product> {
    const message = await validateNewProduct(product);

    if (message !== null) {
      if (message.includes('required')) throw new BadRequestError(message);
      throw new UnprocessableEntityError(message);
    }

    return this.model.create(product);
  }
}

export default ProductService;