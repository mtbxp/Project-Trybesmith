import { Orders } from '../interfaces/Order';
import { InternalErrResponse } from '../interfaces/Responses';
import findAllOrders from '../models/order.model';
import internalErrResponse from '../utils/responses';

export default async function findOrders():
Promise<InternalErrResponse | Orders> {
  try {
    const orders = await findAllOrders();
    return orders;
  } catch (err) {
    return internalErrResponse(err);
  }
}