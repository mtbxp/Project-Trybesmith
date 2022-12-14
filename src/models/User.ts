import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Login, User } from '../types';

export default class ProductModel {
  public connection;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async post({ username, level, vocation, password }: User): Promise<User> {
    const query = `
    INSERT INTO Trybesmith.users (username, vocation, level, password)
    VALUES (?, ?, ?, ?)`;
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(query, [username, vocation, level, password]);
    return { id: insertId, username, level, vocation, password };
  }

  public async find({ username, password }: Login): Promise<User[]> {
    const query = `
    SELECT username, id, level, vocation
    FROM Trybesmith.users WHERE username = ? AND password = ?`;
    const [user] = await this.connection.execute(query, [username, password]);
    return user as User[];
  }
}