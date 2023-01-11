import getOrdersModel from '../models/ordersModel';

export default async function getAllSevice() {
  const result = await getOrdersModel();
  return result; 
}