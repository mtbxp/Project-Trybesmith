import { IProduct } from '../interfaces/products';
import { getAll, createNewProduct } from '../models/products.model';

export async function getAllProducts(): Promise<IProduct[]> {
  const products = await getAll();
  return products as IProduct[];
}

export async function create() {
  const crearteProduct = await createNewProduct();
  return crearteProduct;
}