export interface InternalErrResponse {
  status: number,
  data: {
    message: unknown | undefined,
  },
}

export interface ErrorMessage {
  message: string,
}

export interface TokenResponse {
  token: string | undefined,
}