import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { AddUser, User } from '../interfaces/User.interface';

const createUser = async (user: AddUser): Promise<User> => {
  const { username, vocation, level, password } = user;
  const qr = 'INSERT INTO Trybesmith.users (username, password, level, vocation) VALUES (?,?,?,?);';
  const [result] = await connection
    .execute<ResultSetHeader>(qr, [username, vocation, level, password]);
    
  const { insertId } = result;
  const userData = { id: insertId, username, level, vocation };

  return userData;
};

export default {
  createUser,
};