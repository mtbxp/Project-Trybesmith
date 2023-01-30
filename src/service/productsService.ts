import connection from '../models/connection';
import ProductModel from '../models/productsModel';
import { IdProduct } from '../interfaces';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async productCreated(product: IdProduct): Promise<IdProduct> {
    const productNew = await this.model.productCreated(product);

    return productNew;
  }
}
