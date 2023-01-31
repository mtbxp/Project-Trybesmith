export interface Decode {
  data: {
    username: string, 
    password: string,
  },
  iat: number,
  exp: number
}