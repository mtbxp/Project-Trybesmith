import { ResultSetHeader } from 'mysql2';
import connect from './connection';
import UserInterface from '../interfaces/users.ifc';

export default class UsersModel {
  private connection = connect;

  async create(user: UserInterface): Promise<UserInterface> {
    const { username, vocation, level, password } = user;
 
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.users (username, vocation, level, password) 
      VALUES (?, ?, ?, ?)`,
      [username, vocation, level, password],
    );
    return { id: insertId, ...user };
  }
}
