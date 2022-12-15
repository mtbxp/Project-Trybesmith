import connection from './connection';
import { TUser } from '../type';

const insertNewUserModel = async (newUser: TUser) => {
  const [result] = await connection.execute(`INSERT INTO Trybesmith.users
 (username, vocation, level, password) 
 VALUES (?, ?, ?, ?)`, [newUser.username, newUser.vocation, newUser.level, newUser.password]);
  return result;
};

export default { insertNewUserModel };