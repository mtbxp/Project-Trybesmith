import IProduct from '../Interfaces/products.Interface';
import * as productsModel from '../models/productsModel'; 

export async function createProduct(product: IProduct): Promise<IProduct> {
  const newProduct = await productsModel.create(product);
  const { id, name, amount } = newProduct as IProduct;
  const payload = { id, name, amount };
  return payload;
}

export async function getProducts(): Promise<IProduct[]> {
  const products: IProduct[] = await productsModel.getProducts();
  return products;
}
