import { Pool, ResultSetHeader } from 'mysql2/promise';

export default class LoginModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public login = async (username: string, password: string): Promise<boolean> => {
    const [result] = await this.connection.execute<ResultSetHeader>(
      'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
      [username, password],
    );
    if (result) {
      return true;
    }
    return false;
  };
}
