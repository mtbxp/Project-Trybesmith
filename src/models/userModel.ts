import { ResultSetHeader } from 'mysql2';
import connection from './connection';

import { User, UserDetail } from '../interfaces';

export default async function create(user: UserDetail): Promise<User> {
  const { username, vocation, level, password } = user;
  
  const query = `INSERT INTO Trybesmith.users 
    (username, vocation, level, password) VALUES (?, ?, ?, ?)`;
  const values = [username, vocation, level, password];
  
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;
  
  const newUser: User = { id, ...user };
  return newUser;
}
