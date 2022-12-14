import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { NewUser } from '../types/types';

export async function createUser(newUser: NewUser) {
  const { username, vocation, level, password } = newUser;
  const queryString = `
  INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?);`;
  const valuesArray = [username, vocation, level, password];
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(queryString, valuesArray);
  return { id, username };
}

export async function blabla() {
  console.log('blabla');
}