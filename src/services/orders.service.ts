// import * as ordersModel from '../models/orders.model';
import { Iorders } from '../interfaces';
import ordersModel from '../models/orders.model';

export default async function getAll():Promise<Iorders[]> {
  const products = await ordersModel();
  return products as Iorders[];
}