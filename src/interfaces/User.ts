export interface UserPublic {
  username: string;
  vocation: string;
  level: number;
  id?: number;
}

export interface User extends UserPublic {
  password: string;
}