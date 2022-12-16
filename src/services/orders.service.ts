import * as ordersModel from '../models/orders.model';

export async function getOrders() {
  const ordersList = await ordersModel.findOrders();
  return { status: '', message: ordersList };
}

export async function addOrder(products:number[], userId: number) {
  const orderAdded = await ordersModel.addOrder(products, userId);
  return { status: '', message: orderAdded };
}