import * as orderModel from '../models/orderModel';
import * as productModel from '../models/productModel';

export async function create(productsIds:number[], userId: number) {
  const { id } = await orderModel.create(userId);
  await productsIds.map((productId) => productModel.update(productId, id));
  const data = { userId, productsIds };
  return { status: 201, data };
}

export async function getAll() {
  const data = await orderModel.getAll();
  return { status: 200, data };
}