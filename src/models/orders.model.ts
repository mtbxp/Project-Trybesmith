// import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
// import { TProducts } from '../types';
// import connection from './connection';

// const getOrders = async (): Promise<TProducts[]> => {  
//   const [result] = await connection
//     .execute<RowDataPacket[] & TProducts[]>('SELECT * FROM Trybesmith.products;');

//   return result;
// };

// export default {
//   getOrders,
// };