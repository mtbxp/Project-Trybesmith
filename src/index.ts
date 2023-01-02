import app from './app';
import connection from './models/connection';

const PORT = 3000;

const server = app.listen(PORT, async () => {
  console.log(`Server is running on PORT: ${PORT}`);
  const [res] = await connection.execute('SELECT 1');
  if (res) console.log('Connected to db');
});

export default server;
