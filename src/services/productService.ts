import { Product } from '../interfaces';
import ProductModel from '../models/productModel';
import statusCodes from '../statusCodes';

const productModel = new ProductModel();

export default class ProductsService {
  getAll = async () => {
    const data = await productModel.getAll();
  
    return { status: statusCodes.OK, data };
  };

  create = async (product: Product) => {
    const id = await productModel.create(product);

    const data = { id, ...product };

    return { status: statusCodes.CREATED, data };
  };
}
