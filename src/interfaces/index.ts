export interface InewProducts {
  name: string,
  amount: string,
}

export interface Iproducts extends InewProducts {
  id: number,
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
