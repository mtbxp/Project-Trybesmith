import { Pool } from 'mysql2/promise';
import User from '../interface/user.interface';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: User) {
    const { username, vocation, level, password } = user;

    await this.connection.execute(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
  }
}
