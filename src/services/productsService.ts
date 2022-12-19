import * as productsModel from '../models/productsModel';
import { TProduct, TProductOrder } from '../types';

export async function getAll(): Promise<TProduct[]> {
  const products = await productsModel.getAll();
  return products;
}

export async function getAllOrders(): Promise<TProductOrder[]> {
  const orders = await productsModel.getAllOrders();
  const array: any = [];
  let index = 0;
  orders.forEach((order) => {
    if (Number(order.id) !== index) {
      array.push(
        {
          id: order.id,
          userId: order.userId,
          productsIds: orders.filter((o) => o.id === order.orderId).map((o) => o.productId),
        },
      );
      index = Number(order.id);
    }
  });
  return array;
}

export async function insertProduct(products: TProduct) {
  await Promise.all([products]
    .map(async (product) => productsModel.insertProduct(product)));
  const allProducts = await productsModel.getAll();
  const insertedProduct = allProducts.length - 1;
  
  return allProducts[insertedProduct];
}

export async function insertOrder(userId: TProductOrder, products: TProduct) {
  const orderId: any = await productsModel.insertOrder(userId);
  await Promise.all([products]
    .map(async (product) => productsModel.updateProduct(orderId, product)));
  
  return { userId, productsIds: products };
}