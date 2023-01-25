import { Pool, ResultSetHeader } from 'mysql2/promise';
import Users from '../interfaces/users.interface';
import connection from './connection';

class UserModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async create(users: Users): Promise<Users> {
    const { username, vocation, level, password } = users;
    const createUser = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES(?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    const [{ insertId }] = createUser;
    return { id: insertId, ...users };
  }

  public async getByUsername(username: Users): Promise<Users | null> {
    const query = 'SELECT username FROM `Trybesmith`.`users`';
    const values = [username];

    const [data] = await this.connection.execute(query, values);
    const [user] = data as Users[];

    return user || null;
  }
}

export default UserModel;