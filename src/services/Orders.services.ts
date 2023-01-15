import getAll from '../models/Orders.model';
import { IOder } from '../interfaces/IOrders';

const getAllOrders = async (): Promise<IOder[]> => {
  const result = await getAll();
  return result;
};

export default getAllOrders;