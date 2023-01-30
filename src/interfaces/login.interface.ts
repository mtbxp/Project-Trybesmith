export default interface Login {
  id?: number;
  username: string;
  password: string;
}

export type GetUser = [{ username?: string, vocation?: string, level?: number }];
