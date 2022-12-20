import { Pool, RowDataPacket } from 'mysql2/promise';
import ILogin from '../interfaces/login.interface';

export default class LoginModel {
  constructor(public connection: Pool) {}

  public async getByUsername(username: string): Promise<ILogin | undefined> {
    const [[user]] = await this.connection.execute<RowDataPacket[] & ILogin[]>(
      `SELECT * FROM Trybesmith.users
      WHERE username = ?;`,
      [username],
    );
    return user;
  }
}