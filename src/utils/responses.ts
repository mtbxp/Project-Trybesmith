import { InternalErrResponse } from '../interfaces/Responses';

export default function internalErrResponse(err: unknown): InternalErrResponse {
  if (err) {
    return { status: 500, data: { message: err } };
  }
  return { status: 500, data: { message: 'Unknow Error' } };
}
