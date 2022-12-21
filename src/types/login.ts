export default interface LoginDate {
  username: string;
  password: string;
}

export type GetUser = [
  { username?: string, vocation?: string, level?: number },
];