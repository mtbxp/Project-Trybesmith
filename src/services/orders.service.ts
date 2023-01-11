import ordersModel from '../models/orders.model';
// import usersModel from '../models/users.model';
import { ProductsIds } from '../types';

export default {
  findAll: async () => {
    const result = await ordersModel.findAll();

    return { err: null, output: result };
  },

  create: async (productsIds: ProductsIds, userId: number) => {
    const result = await ordersModel.create(productsIds, userId);

    if (result) return { err: null, output: result };
  },
};