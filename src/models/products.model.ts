import connection from './connections';
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

  return allProducs as Iproduct[];
};