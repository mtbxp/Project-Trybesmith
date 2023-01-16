import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../utils/types/User.types';

export default class UserModel {
  constructor(private connection: Pool) {
    this.connection = connection;
  }

  public async create(data: User): Promise<number> {
    const sql = `
      INSERT INTO Trybesmith.users (username, vocation, level, password)
      VALUES (?, ?, ?, ?);
    `;

    const [{ insertId }] = await this.connection.query<ResultSetHeader>(sql, [
      data.username,
      data.vocation,
      data.level,
      data.password,
    ]);

    return +insertId;
  }
}
