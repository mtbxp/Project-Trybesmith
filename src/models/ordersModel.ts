import connection from './connection';

const getOrders = async () => {
  const [result] = await connection.execute(`
  select pri.id, pri.user_id as userId, json_arrayagg(sec.id) as 'productsIds' 
  from Trybesmith.orders as pri 
  inner join Trybesmith.products as sec 
  on pri.id = sec.order_id 
  group by pri.id;
  `);
  return result;
};

export default getOrders;