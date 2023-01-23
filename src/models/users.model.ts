import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/users.interface';
import Login from '../interfaces/login.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getByUsername(login: Login): Promise<Login> {
    const { username, password } = login;
    
    const result = await this.connection.execute(
      `
      SELECT id, username from Trybesmith.users
      WHERE username = ?
      AND password = ?`,
      [username, password],
    );
    const [rows] = result;
    const [user] = rows as Login[];

    return user;
  }

  public async create(user: User): Promise<User> {
    const { username, vocation, level, password } = user;
    
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );

    return { id: insertId, ...user };
  }
}