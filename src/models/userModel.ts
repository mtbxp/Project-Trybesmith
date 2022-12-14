import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { TUser } from '../types';
import connection from './connection';

const getByUsername = async (username: string): Promise<TUser> => {
  const [rows] = await connection
    .execute<RowDataPacket[] & TUser[]>(`SELECT * FROM 
    Trybesmith.users WHERE username = ?;`, [username]);
  
  return rows[0];
};

const createUser = async (user: TUser): Promise<TUser> => {
  const { username, vocation, level, password } = user;
    
  const query = `INSERT INTO Trybesmith.users (username, vocation, level, password )
        VALUES (?, ?, ?, ?)`;
  const values = [username, vocation, level, password];
    
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;
    
  const newUser: TUser = { ...user, id };
  return newUser;
};

export default { getByUsername, createUser };