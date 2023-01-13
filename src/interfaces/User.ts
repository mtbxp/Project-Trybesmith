export interface UserR {
  username: string;
  vocation: string;
  level: number;
}

export interface User extends UserR {
  password: string;
}