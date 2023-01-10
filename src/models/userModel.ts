import connection from './connection';

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM users');
  return rows;
};

export default getAll;
