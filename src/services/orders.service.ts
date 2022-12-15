import * as OrdersModel from '../models/orders.model';
import * as ProductModel from '../models/product.model';
import { TOrders } from '../types';

export async function getAll():Promise<TOrders[]> {
  const orders = await OrdersModel.getAll();

  return orders;
}

export const create = async (id:number, products:number[]) => {
  const orderId = await OrdersModel.create(id);

  await Promise.all(products.map((productId) => ProductModel
    .updateById(orderId, productId)));

  return { userId: id, productsIds: products };
};