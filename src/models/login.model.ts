import { RowDataPacket } from 'mysql2/promise';
import Login from '../interfaces/login.interface';
import connection from './connection';

const getByUsername = async (login: Login) => {
  const [select] = await connection.execute<Login[] & RowDataPacket[]>(
    `SELECT user.id, user.username, user.vocation, user.level FROM Trybesmith.users AS user 
    WHERE user.username = ? AND user.password = ?;`,
    [login.username, login.password],
  );
  return select;
};

export default getByUsername;
