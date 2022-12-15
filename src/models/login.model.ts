import { User } from '../interfaces/user.interface';
import connection from './connection';

const userExistDb = async (username: string, password: string): Promise<User | null> => {
  const query = 'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?;';
  const values = [username, password];
  const [result] = await connection.execute(query, values);
  const [user] = result as User[];
  return user || null;
};

export default userExistDb;