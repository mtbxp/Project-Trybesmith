import usersModel from '../models/users.model';

export default async function insertUser(
  username: string,
  vocation: string,
  level: number,
  password: string,
) {
  const result = await usersModel(username, vocation, level, password);
  /* console.log('esse vem do model para service', result); */
  return result;
}
