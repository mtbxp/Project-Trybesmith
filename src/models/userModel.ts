import { Pool, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { User } from '../interfaces/userInterface';

export default class UserModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getByUsername(username: string): Promise<User | null> {
    const query = 'SELECT * FROM Trybesmith.users WHERE username = ?';
    const values = [username];
  
    const [data] = await this.connection.execute(query, values);
    const [user] = data as User[];
  
    return user || null;
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