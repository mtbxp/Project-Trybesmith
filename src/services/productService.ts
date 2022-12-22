// import { Product } from '../helpers/types';
// import connection from '../models/connection';
import productModel from '../models/productModel';
import { Product } from '../helpers/types';

// export default class ProductsService {
//   public model: typeof ProductsModel;

//   constructor() {
//     this.model = new ProductsModel(connection);
//   }

//   async insertProduct(product: Product) {
//     const result = await this.model.insertProduct(product);
//     return result;
//   }
// }

async function getAll(): Promise<Product[]> {
  const result = await productModel.getAll();
  return result;
}

async function create(product: Product): Promise<Product> {
  const result = await productModel.create(product);
  return result;
}

export default {
  getAll,
  create,
};
