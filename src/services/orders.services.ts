import { getAllOrdersModel } from '../models/users.model';

export const getAllOrdersService = async () => {
  try {
    const orders = await getAllOrdersModel();
    return { orders };
  } catch (e) {
    const err = e as TypeError;
    return { error: true, message: err.message };
  }
};

export const lint = 2;