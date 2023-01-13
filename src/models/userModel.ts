import { ResultSetHeader } from 'mysql2';
import mysql from './connection';
import IUser from '../interface/IUser';

export default class UserModel {
  connection = mysql;

  public async addUser(user: IUser): Promise<IUser> {
    const { username, vocation, level, password } = user;
    const [{ insertId }] = await this
      .connection.execute<ResultSetHeader>(` INSERT INTO
        Trybesmith.Users (username, vocation, level, password)
        VALUES(?, ?, ?, ?)`, [username, vocation, level, password]);
    return { id: insertId, username, vocation, level, password };
  }
}