export interface Iproducts {
  id?: number,
  name: string,
  amount: string,
  orderId?: string | null
}

// export = {
//   Tproducts,
// };

// CREATE TABLE Trybesmith.products (
//   id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
//   name TEXT NOT NULL,
//   amount TEXT NOT NULL,
//   order_id INTEGER,
//   FOREIGN KEY (order_id) REFERENCES Trybesmith.orders (id)
// );
