import connection from './connection';
import { IOder } from '../interfaces/IOrders';

const getAll = async (): Promise<IOder[]> => {
  const [result] = await connection.execute(
    `SELECT o.id, o.user_id as userId, 
    JSON_ARRAYAGG(p.id) as productsIds 
    FROM Trybesmith.orders o 
    inner join Trybesmith.products p ON p.order_id = o.id
    group by o.id`,
  );
  return result as IOder[];
};

export default getAll;