import productsModel from '../models/productsModel';

interface IProducts {
  id: number;
  name: string;
  amount: string;
  orderId?: number;
}

const getAllProducts = async (): Promise<IProducts[]> => {
  const products: IProducts[] = await productsModel.getAllProducts();
  return products;
}

export default {
  getAllProducts
};