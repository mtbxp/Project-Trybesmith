import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
// import { GetUser } from '../interfaces/login.interface';
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

  public async userLogin(username: string, password: string): Promise<Users> {
    const [[user]] = await this.connection.execute<(Users & RowDataPacket)[]>(
      'SELECT id FROM TrybeSmith.users WHERE username = ? AND password = ?', [username, password]);
    return user;
  }
}
  
export default UserModel;