import { Pool } from 'mysql2/promise';
import { User } from '../utils/interfaces/userInterface';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public login = async (username: string): Promise<User[]> => {
    const [users] = await this.connection.execute(
      'SELECT * FROM Trybesmith.users WHERE username = ?',
      [username],
    );

    return users as User[];
  };
}
