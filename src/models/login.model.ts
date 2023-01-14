// import { RowDataPacket } from 'mysql2';
// import Login from '../interfaces/login.interface';
// import User from '../interfaces/user.interface';
// import connection from './connection';

// const findUser = async (login: Login): Promise<User[]> => {
//   const { username, password } = login;
//   const [result] = await connection.execute<(
//   RowDataPacket & User)[]>(
//     'SELECT id, username FROM Trybesmith.users WHERE username = ? AND password = ?',
//     [username, password],
//     );
//   return result;
// };

// export default findUser;