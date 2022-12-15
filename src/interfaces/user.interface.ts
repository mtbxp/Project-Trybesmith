export interface Login {
  username: string;
  password: string;
}

export interface User extends Login {
  id?: number;
  vocation: string;
  level: number;
}