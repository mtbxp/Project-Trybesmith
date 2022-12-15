import { RowDataPacket } from 'mysql2/promise';
import { TUser } from '../types';
import connection from './connection';

export async function getAll(): Promise<TUser[]> {
  const [users] = await connection.execute<RowDataPacket[] & TUser[]>(
    'SELECT * FROM Trybesmith.users;',
  );
    
  return users;
}
  
// const getById = async (id) => {
//   const [result] = await connection.execute(
//     'SELECT * FROM StoreManager.Users WHERE id = (?)', 
//     [id],
//   );
  
//   return result;
// };
  
export async function insertUser({ username, vocation, level, password }: TUser) {
  await connection.execute(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
}

// const updateById = async (id, { name }) => connection.execute(
//   'UPDATE StoreManager.Users SET name = (?) WHERE id = (?)',
//   [name, id],
// );

// const deleteById = (id) => connection.execute(
//   'DELETE FROM StoreManager.Users WHERE id = (?)', [id],
// );

// module.exports = {
//   getAll,
//   getById,
//   insertUser,
//   updateById,
//   deleteById,
// };