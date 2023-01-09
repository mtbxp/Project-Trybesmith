import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { NewUser, UserCreated, User } from '../interfaces/types';

export async function addNewUser(newUser: NewUser): Promise<UserCreated> {
  const { username, vocation, level, password } = newUser;
  const user = `
  INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?);`;
  const array = [username, vocation, level, password];
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(user, array);
  return { id, username };
}

export async function getUsername(username: string): Promise<User> {
  const usernameString = 'SELECT * FROM Trybesmith.users WHERE username= ?;';
  const [[user]] = await connection.execute<RowDataPacket[]>(usernameString, [username]);
  return user as User;
}
