import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/userInterface';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async registerUser(user: User): Promise<object> {
    const { username, vocation, level, password } = user;

    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );

    const { insertId } = result;

    return { id: insertId };
  }
}
