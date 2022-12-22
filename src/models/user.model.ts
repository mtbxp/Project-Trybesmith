import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces';

export default class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async addUser({ username, vocation, level, password }: IUser): Promise<IUser> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.users(username, vocation, level, password) VALUES (?, ?, ?, ?)
    `, [username, vocation, level, password]);

    const newUser = { id: insertId, username, vocation, level, password };
    
    return newUser;
  }
}