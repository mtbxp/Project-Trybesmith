import { DefaultHttpResponse, InternalErrResponse } from '../interfaces/Responses';

export function internalErrResponse(err: unknown): InternalErrResponse {
  if (err) {
    return { status: 500, data: { message: err } };
  }
  return { status: 500, data: { message: 'Unknow Error' } };
}

export function defaultHttpResponse(status: number, data: object): DefaultHttpResponse {
  return { status, data };
}
