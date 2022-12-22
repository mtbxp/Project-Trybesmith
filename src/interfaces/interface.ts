// ./interfaces/product.interface.ts
interface Product {
  id?: number;
  name: string;
  amount: string;
}

interface User {
  username: string;
  vocation: string;
  level: number;
  password: string;
}

interface UserWithoutPassword {
  username: string;
  vocation: string;
  level: number;
}

interface Order {
  id?: number;
  userId: string;
}

export {
  Product,
  User,
  UserWithoutPassword,
  Order,
};