import { RowDataPacket } from 'mysql2';
import connection from './connection';

const selectAllOrdersModel = async () => {
  const [result] = await connection.execute<RowDataPacket[]>(
    `SELECT o.id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds 
    FROM Trybesmith.orders as o
  inner join Trybesmith.products as p
  on o.id = p.order_id
  group by o.id;`,
  );

  return result;
};

export default { selectAllOrdersModel };