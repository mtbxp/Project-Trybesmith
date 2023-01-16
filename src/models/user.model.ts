// ./src/models/user.models.ts

import { ResultSetHeader } from 'mysql2';
import mysql from './connection';
import UserInterface from '../interfaces/UserInterface';

export default class UserModel {
  private connection = mysql;

  async create(user: UserInterface): Promise<UserInterface> {
    const { username, vocation, level, password } = user;

    const result = await this.connection.execute<ResultSetHeader>( 
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)', 
      [username, vocation, level, password],
    );

    const [userInserted] = result;

    const { insertId } = userInserted;

    return { id: insertId, ...user };
  }
}
