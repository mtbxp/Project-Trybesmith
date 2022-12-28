import * as ordersModel from '../models/orders.model';
import { Iorders } from '../interfaces';
// import ordersModel from '../models/orders.model';

export default async function getAll():Promise<Iorders[]> {
  const products = await ordersModel.default();
  return products as Iorders[];
}

// export function getAll() {
//   throw new Error('Function not implemented.');
// }
