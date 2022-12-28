import { ResultSetHeader } from 'mysql2';
import { CreatedUser, User } from '../interfaces/User';
import connection from './connection';

async function createUser(newUser: User): Promise<CreatedUser | null> {
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

export {
  createUser,
};