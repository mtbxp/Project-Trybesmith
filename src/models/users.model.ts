import { Iorder, Iuser } from '../types';
import connection from './connection';

export const registerAuserModel = async (userData: Iuser) => {
  const { username, vocation, level, password } = userData as Iuser;
  const QUERY = `INSERT INTO Trybesmith.users
  (username,vocation, level, password) VALUES (?,?,?,?)`;
  await connection.execute(QUERY, [username, vocation, level, password]);
};

export const getUserModel = async ({ username, password }: Iuser) => {
  const QUERY = 'SELECT * from Trybesmith.users where username = ? and password = ?';
  const [user] = await connection.execute(QUERY, [username, password]);
  const [userData] = user as Iuser[];
  return userData;
};

export const getAllOrdersModel = async () => {
  const QUERY = `
  select  o.id as id, o.user_id as userId, json_arrayagg(p.id) as productsIds
from Trybesmith.orders as o
inner join Trybesmith.products as p
inner join Trybesmith.users as u
on u.id = o.user_id and o.id = p.order_id
group by o.id
  `;
  const [orders] = await connection.execute(QUERY);
  console.log(orders);
  return orders as Iorder[];
};