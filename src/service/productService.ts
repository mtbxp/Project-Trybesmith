import ProductModel from '../models/productModel';
import IProduct from '../interface/IproductIndex';

export default class ProductService {
  model = new ProductModel();
  
  async addProducts(name: string, amount: string): Promise<IProduct> {
    const userId = await this.model.addProducts(name, amount);
    return userId;
  }

  async findAll(): Promise<IProduct[]> {
    const resultList = await this.model.findAll();
    console.log(resultList);
    return resultList;
  }
}
