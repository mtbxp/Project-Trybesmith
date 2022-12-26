export interface InternalErrResponse {
  status: number,
  data: {
    message: unknown | undefined,
  },
}