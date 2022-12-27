import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { AddUser, User } from '../interfaces/User.interface';

const createUser = async (user: AddUser): Promise<User> => {
  const { username, vocation, level, password } = user;
  const qr = 'INSERT INTO Trybesmith.users (username, password, level, vocation) VALUES (?,?,?,?)';
  const [response] = await connection
    .execute<ResultSetHeader>(qr, [username, password, level, vocation]);

  return { id: response.insertId, username, level, vocation };
};
export default {
  createUser,
};