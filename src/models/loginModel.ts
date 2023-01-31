import connection from './connection';
import { Users } from '../types/User';

const searchLogin = async ({ username, password }: Users) => {
  const [result] = await connection.execute(
    `SELECT user.username, user.vocation, user.level FROM Trybesmith.users AS user 
    WHERE user.username = ? AND user.password = ?;`,
    [username, password],
  );
  return result;
};

export default {
  searchLogin,
};