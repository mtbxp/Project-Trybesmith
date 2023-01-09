import { ResultSetHeader } from 'mysql2';
import { Pool } from 'mysql2/promise';
import connection from './connection';

class User {
  private connection: Pool;

  username?: string;

  vocation?: string;

  level?: number;

  password?: string;

  constructor(username: string, vocation: string, level: number, password: string) {
    this.username = username;
    this.vocation = vocation;
    this.level = level;
    this.password = password;
    this.connection = connection;
  }

  async saveUser(): Promise<number> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [this.username, this.vocation, this.level, this.password],
    );
    return insertId as number;
  }

  public async login(user: string): Promise<User[]> {
    const [users] = await this.connection.execute(`
      SELECT * FROM Trybesmith.users 
      WHERE username = '${user}'`);
    return users as User[];
  }
}

export default User;