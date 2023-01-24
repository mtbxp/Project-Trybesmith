import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import IUser from '../interfaces/user.interface';

export async function createUser({ username, vocation, level, password }: IUser): Promise<number> {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  return result.insertId;
}

export async function getAllUsers(): Promise<IUser[]> {
  const query = 'SELECT * FROM Trybesmith.users';
  const [users] = await connection.execute(query);
  return users as IUser[];
}

export async function getById(userName: string) {
  const query = 'SELECT * FROM Trybesmith.users WHERE username=? ';
  const [users] = await connection.execute<(IUser & RowDataPacket)[]>(query, [userName]);
  console.log(users);
  return users[0].id;
}