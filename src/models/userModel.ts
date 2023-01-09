import { ResultSetHeader } from 'mysql2';
import mysql from './connection';
import IUser from '../interface/IUser';

export default class UserModel {
  connection = mysql;

  public async addUser(user: IUser): Promise<IUser> {
    const { username, classe, level, password } = user;
    const [{ insertId }] = await this
      .connection.execute<ResultSetHeader>(` INSERT INTO
        Trybesmith.Users (username, classe, level, password)
        VALUES(?, ?, ?, ?)`, [username, classe, level, password]);
    return { id: insertId, username, classe, level, password };
  }
}