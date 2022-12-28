import * as ordersModel from '../models/orders.model';
import { Iorders } from '../interfaces';
// import ordersModel from '../models/orders.model';

// eslint-disable-next-line import/prefer-default-export
export async function getAll():Promise<Iorders[]> {
  const products = await ordersModel.getAll();
  return products as Iorders[];
}

// export function getAll() {
//   throw new Error('Function not implemented.');
// }
