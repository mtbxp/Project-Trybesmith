import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import Users from '../interface/users.interface';

const usersCreateModel = async (user: Users) => {
  const { username, vocation, level, password } = user;
  const result = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.users (username, vocation, level, password)
    VALUES (?, ?, ?, ?)`,
    [username, vocation, level, password],
  );

  return result;
};

export default usersCreateModel;