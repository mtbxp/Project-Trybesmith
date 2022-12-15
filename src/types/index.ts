export type TProducts = {
  id?: number,
  name: string,
  amount: string,
  orderId: number
};

export type TPeople = {
  id?: number,
  username: string
  vocation: string,
  level: number,
  password: string,
};

export type TOrders = {
  id?: number,
  userId: number,
  productsIds: number[]
};

// CREATE TABLE Trybesmith.products(
//   id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
//   name TEXT NOT NULL,
//   amount TEXT NOT NULL,
//   order_id INTEGER,
//   FOREIGN KEY(order_id) REFERENCES Trybesmith.orders(id)
// );

// {
//   "username": "MAX",
//   "vocation": "swordsman",
//   "level": 10,
//   "password": "SavingPeople"
// }