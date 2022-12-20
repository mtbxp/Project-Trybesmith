import userModel from '../models/modelUsers';

export default async function insertNewUser(
  username: string,
  vocation: string, 
  level: number, 
  password: string,
): Promise<void> {
  await userModel(username, vocation, level, password);
}
