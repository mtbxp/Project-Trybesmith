import { ResultSetHeader } from 'mysql2';
import { IUser, User } from '../interfaces';
import connection from './connection';

const TABLE = 'Trybesmith.user';

export async function create(user: User): Promise<IUser> {
  const { username, vocation, level, password } = user;
  const query = `INSERT INTO ${TABLE} (username, vocation, level, password) WHERE (?, ?, ?, ?)`;
  const value = [username, vocation, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, value);
  const { insertId: id } = result;

  return { id, ...user };
}

export async function oi() {
  return 'oi';
}