import connection from '../models/connection';
import ProductModel from '../models/productModel';
import { Product } from '../models/interfaces/productInterface';

export default class ProductService {
  constructor(public model = new ProductModel(connection)) { }

  public getAll = async (): Promise<Product[]> => {
    const products = await this.model.getAll();
    return products as Product[];
  };

  public create = (product: Product): Promise<Product> => this.model.create(product);
}
