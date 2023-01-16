export interface Login {
  username: string;
  password: string;
}

export interface Payload extends Login {
  id: number;
}

export interface UserPublic {
  username: string;
  vocation: string;
  level: number;
  id?: number;
}

export interface User extends UserPublic {
  password: string;
}