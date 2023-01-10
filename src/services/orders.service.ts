import ordersModel from '../models/orders.model';

export default {
  findAll: async () => {
    const result = await ordersModel.findAll();

    return { err: null, output: result };
  },
};