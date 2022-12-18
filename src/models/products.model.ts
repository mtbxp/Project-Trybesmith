import connection from './connection';
import { Iproduct, InewThing } from '../types';

export const addAProductModel = async (name:string, amount:string) => {
  const [newProduct] = await connection.execute(
    'INSERT INTO Trybesmith.products (name,amount) VALUES (?,?)',
    [name, amount],
  );
  console.log(newProduct);
  const { insertId } = newProduct as InewThing;
  return { id: insertId, name, amount } as Iproduct;
};

export const getAllProductsModel = async () => {
  const [allProducs] = await connection.execute(
    'select * from Trybesmith.products',
  );
  console.log(allProducs);
  return allProducs as Iproduct[];
};

const updateProductOrder = async (productsIDs:number[], orderId:number) => {
  const QUERY = `
  update Trybesmith.products  
  set order_id = ${orderId}
  where id in(${productsIDs.toString()})`;
  console.log(QUERY);
  await connection.execute(QUERY);
};

export const addAOrderModel = async (productsIds:number[], userId:number) => {
  console.log("🚀 ~ file: products.model.ts:32 ~ addAOrderModel ~  userId",  userId)
  console.log("🚀 ~ file: products.model.ts:32 ~ addAOrderModel ~ productsIds", productsIds);
  const [newOrder] = await connection.execute(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
    [userId],
  );
  const { insertId } = newOrder as InewThing;
  await updateProductOrder(productsIds, insertId);
};
