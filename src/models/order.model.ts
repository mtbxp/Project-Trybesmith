// import { Pool, RowDataPacket } from 'mysql2/promise';
// import { IOrder } from '../interfaces';

// export default class OrderModel {
//   connection: Pool;

//   constructor(connection) {
//     this.connection = connection;
//   }

//   async getAllOrders() {
//     const result = await this.connection.execute<RowDataPacket[] & IOrder[]>(`
//       SELECT * FROM Trybesmith.orders
//     `);
//     console.log(result);
//     return result;
//   }
// }