export interface Token {
  payload: {
    id: number;
    username: string;
    vocation: string;
    level: number;
    password: string;
  }
}