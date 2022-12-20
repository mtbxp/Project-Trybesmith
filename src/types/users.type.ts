export type TUser = {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password?: string
};

export type TLogin = {
  username: string,
  password: string,
};