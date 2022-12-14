export interface UserCredentials {
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export interface User extends UserCredentials {
  id: number;
}