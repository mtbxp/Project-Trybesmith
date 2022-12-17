export type UserRequest = {
  username: string,
  vocation: string,
  level: number,
  password: string,
};

export type User = {
  id: number,
} & UserRequest;

export type TUser = {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password?: string,
};