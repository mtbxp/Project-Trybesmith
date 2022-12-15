import connection from './connection';

export default async function getAll() {
  const [result] = await connection.execute(
    `SELECT tord.user_id AS userId, tord.id, JSON_ARRAYAGG(trp.id)
    AS productsIds FROM Trybesmith.orders
    AS tord INNER JOIN Trybesmith.products
    AS trp
    WHERE tord.id = trp.order_id GROUP BY tord.id;`,
  );
  console.log(result);

  return result;
}
