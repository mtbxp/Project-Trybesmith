import { ResultSetHeader } from 'mysql2';
import IUser from '../interfaces/IUser';
import mysql from './connection';

export default class UserModel {
  private connection = mysql;

  async insertUser(user: IUser): Promise<void> {
    const { username, vocation, level, password } = user;
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
  }
}