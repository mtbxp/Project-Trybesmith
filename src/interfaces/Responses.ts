export interface InternalErrResponse {
  status: number,
  data: {
    message: unknown | undefined,
  },
}

export interface DefaultHttpResponse {
  status: number,
  data: object,
}
