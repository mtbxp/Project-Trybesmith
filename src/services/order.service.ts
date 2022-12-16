import getAll from '../models/order.model';

export default async function getAllService() {
  const result = await getAll();
  return result;
}