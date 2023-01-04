import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createUser(user: User) {
    const { username, vocation, level, password } = user;

    const query = `INSERT INTO Trybesmith.users
      (username, vocation, level, password)
      VALUES (?, ?, ?, ?)`;
    const values = [username, vocation, level, password];

    await this.connection.execute<ResultSetHeader>(query, values);
  }
}