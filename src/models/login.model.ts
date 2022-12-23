import { Pool, RowDataPacket } from 'mysql2/promise';
import { ILogin } from '../interfaces';

export default class LoginModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async checkUser(username: string): Promise<ILogin | undefined> {
    const [[user]] = await this.connection.execute<RowDataPacket[] & ILogin[]>(`
      SELECT * FROM Trybesmith.users WHERE username = ?
    `, [username]);
    console.log('user', user);
    console.log('username', username);

    return user;
  }
}