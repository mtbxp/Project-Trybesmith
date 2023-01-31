import { Pool } from 'mysql2/promise';
import { User } from '../interfaces';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async userLogin(username: string, password: string): Promise<User> {
    const userResult = await this.connection.execute(
      'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
      [username, password],
    );

    const [rows] = userResult;
    const [user] = rows as User[];

    return user;
  }
}