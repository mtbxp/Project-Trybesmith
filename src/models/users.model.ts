import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import TUser from '../interfaces/user.interface';

class UserModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<TUser[]> {
    const [rows] = await this.connection.execute<(TUser & RowDataPacket)[]>(
      'SELECT id, username, vocation, level, password FROM Trybesmith.users');
    return rows;
  }

  public async getByUsername(username: string):Promise<TUser> {
    const [[rows]] = await this.connection.execute<(
    TUser & RowDataPacket
    )[]>(
      `SELECT id, username, vocation, level, password FROM Trybesmith.users
    WHERE username = ?`,
      [username],
      );
    return rows;
  }

  public async create(User: TUser): Promise<number> {
    const { username, vocation, level, password } = User;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    return insertId;
  }
}

export default UserModel;