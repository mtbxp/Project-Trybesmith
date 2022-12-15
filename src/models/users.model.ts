import { Iuser } from '../types';
import connection from './connections';

// const registerAuserModel = async ({ username, vocation, level, password }: Iuser) => {
//   const QUERY = 'INSERT INTO Trybesmith.users (username,vocation, level, password) VALUES (?,?,?,?)';
//   await connection.execute(QUERY, [username, vocation, level, password]);
//   return 'its ok';
// };

const getPasswordWithUsername = async ({ username, password }: Iuser) => {
  const QUERY = 'SELECT * from Trybesmith.users where username = ? and `password` = ?';
  const [user] = await connection.execute(QUERY, [username, password]);
  console.log(user);
  return user;
};

getPasswordWithUsername({ username: 'reigal', password: '1dragaonoceu' });
