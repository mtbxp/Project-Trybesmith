import connection from './connection';
import UserInput from '../types/user';

const addUsers = async (userDate: UserInput) => {
  const { username, vocation, level, password } = userDate;
  await connection.execute(`
  insert into Trybesmith.users (username, vocation, level, password) 
  values ( ?, ?, ?, ?)`, [username, vocation, level, password]);
};

export default addUsers;