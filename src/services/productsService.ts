import { Product } from '../interfaces';
import ProductsModel from '../models/productsModel';
import statusCodes from '../statusCodes';

const productsModel = new ProductsModel();

export default class ProductsService {
  getAll = async () => {
    const data = await productsModel.getAll();
  
    return { status: statusCodes.OK, data };
  };

  create = async (product: Product) => {
    const id = await productsModel.create(product);

    const data = { id, ...product };

    return { status: statusCodes.CREATED, data };
  };
}
