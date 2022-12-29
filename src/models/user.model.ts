import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { CreatedUser, LoggedUser, LogUser, User } from '../interfaces/User';
import connection from './connection';

export async function createUser(newUser: User): Promise<CreatedUser | null> {
  const { username, level, password, vocation } = newUser;
  const query = `
  INSERT INTO Trybesmith.users 
  (username, level, password, vocation) 
  VALUES (?, ?, ?, ?)`;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(query, [username, level, password, vocation]);
  
  if (insertId) {
    return {
      userId: insertId,
      username,
      vocation,
      level,
    };
  }

  return null;
}

export async function loginUser({ username, password }: LogUser): Promise<LoggedUser | null> {
  const query = `SELECT id 
  FROM Trybesmith.users u
  WHERE u.username = ?
  AND u.password = ?`;
  const [[user]] = await connection.execute<RowDataPacket[]>(query, [username, password]);

  if (user) {
    return {
      userId: user.id,
      username,
    };
  }
  return null;
}
