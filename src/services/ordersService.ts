import jwt from 'jsonwebtoken';
import ordersModel from '../models/ordersModel';
import { Decode } from '../types/Decode';
import { Order } from '../types/Order';
import { OrderData } from '../types/orderData';
import { Users } from '../types/User';

const getAllOrders = async (): Promise<Order[]> => {
  const searchedOrders = await ordersModel.getAllOrders();
  return searchedOrders;
};

const decodeToken = (token: string): object => {
  const decode = jwt.decode(token);
  return decode as object;
};

const getUserId = async (data: Users) => { 
  const users = await ordersModel.listAllUsers();
  const userFound = users.find(
    (user) => user.username === data.username && user.password === data.password,
  );
  return userFound?.id;
};

const newOrder = async (productsId: OrderData, token: string): Promise<OrderData> => {
  const decode = decodeToken(token);
  console.log(decode);
  const { data } = decode as Decode;
  const userId = await getUserId(data);
  const ordersAdded = await ordersModel.newOrder(productsId, Number(userId));
  return ordersAdded;
};

export default {
  getAllOrders,
  newOrder,
};