import connection from '../models/connection';
import ProductModel from '../models/products.model';
import {
  IProduct,
  IProductResponse,
} from '../interfaces/products.interface';
import status from '../utils/statusCode';

export default class ProductService {
  private model;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public insert = async (
    { name, amount }: IProduct,
  ): Promise<IProductResponse<IProduct>> => {
    const newProduct = await this.model.insert({ name, amount });

    return { type: status.HTTP_CREATED, message: newProduct };
  };

  public getAll = async (): Promise<IProductResponse<IProduct[]>> => {
    const result = await this.model.getAll();
    return { type: status.HTTP_OK, message: result };
  };
}
