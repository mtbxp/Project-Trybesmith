import ProductsModel from '../models/productsModel';
import statusCodes from '../statusCodes';

const productsModel = new ProductsModel();

export default class ProductsService {
  getAll = async () => {
    const data = await productsModel.getAll();
  
    return { status: statusCodes.OK, data };
  };
}
