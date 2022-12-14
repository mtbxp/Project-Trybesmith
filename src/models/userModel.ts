import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { ILogin } from '../interfaces/ILogin';
import { IUser } from '../interfaces/IUser';
import mysql from './connection';

export default class UserModel {
  private connection = mysql;

  public create = async (user: IUser): Promise<IUser> => {
    const { username, vocation, level, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;

    return { id: insertId, ...user };
  };

  public getUser = async (login: ILogin): Promise<IUser[]> => {
    const { username, password } = login;
    const [result] = await this.connection.execute<(
    IUser[] & RowDataPacket[])>(
      'SELECT * FROM Trybesmith.users WHERE username=? AND password=?',
      [username, password],
      );

    return result; 
  };
}