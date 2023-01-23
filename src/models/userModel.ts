import connection from './connection';
import { User } from '../interfaces';

// eslint-disable-next-line import/prefer-default-export
export async function getAll(): Promise<User[]> {
  const query = 'SELECT * FROM Trybesmith.users';

  const [user] = await connection.execute(query);

  return user as User[];
}