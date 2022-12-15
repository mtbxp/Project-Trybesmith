import { RowDataPacket } from 'mysql2';
import { Login, User } from '../interfaces';
import connection from './connection';

export default class LoginModel {
  login = async ({ username }: Login): Promise<User[]> => {
    const [user] = await connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.users where username = ?',
      [username],
    );
  
    return user as User[] || null;
  };
}