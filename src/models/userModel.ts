import connection from './connection';
import UserInput from '../types/user';
import LoginDate, { GetUser } from '../types/login';

const addUsers = async (userDate: UserInput) => {
  const { username, vocation, level, password } = userDate;
  await connection.execute(`
  insert into Trybesmith.users (username, vocation, level, password) 
  values ( ?, ?, ?, ?)`, [username, vocation, level, password]);
};

export const getUserByNameAndPass = async (loginDate: LoginDate) => {
  const [result] = await connection.execute(
    `
  select user.username, user.vocation, user.level from Trybesmith.users as user 
  where user.username = ? and user.password = ?;`,
    [loginDate.username, loginDate.password],
  ) as unknown as GetUser;
  return result;
};

export default addUsers;