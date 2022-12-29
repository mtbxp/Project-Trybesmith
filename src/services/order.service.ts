import { DefaultHttpResponse, InternalErrResponse } from '../interfaces/Responses';
import findAllOrders from '../models/order.model';
import { defaultHttpResponse, internalErrResponse } from '../utils/responses';

export default async function findOrders():
Promise<InternalErrResponse | DefaultHttpResponse> {
  try {
    const orders = await findAllOrders();
    return defaultHttpResponse(200, orders);
  } catch (err) {
    return internalErrResponse(err);
  }
}