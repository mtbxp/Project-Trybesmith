export interface User {
  id?: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
  token?: string; 
}

export interface UserCredentials {
  username: string;
  password: string;
} 