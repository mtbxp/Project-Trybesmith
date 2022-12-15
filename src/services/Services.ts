import models from '../models/models';
import { TProduct, TUser } from '../types';
import jwtConfig from '../Auth/jwtConfig';

const getAlProducts = async (): Promise<TProduct[]> => {
  const products = await models.getAlProducts();
  return products;
};

const insertProduct = async (product:TProduct) => {
  await Promise.all([product].map(async (p) => models.insertProduct(p)));  
  const getAllProducts = await models.getAlProducts();
  const result = getAllProducts.length - 1;
  
  return { type: null, message: getAllProducts[result] };
};

const getAllUsers = async (): Promise<TUser[]> => {
  const user = await models.getAllUser();
  return user;
};

const insertUser = async (user:TUser) => {
  await Promise.all([user].map(async (p) => models.insertUser(p)));  
  const getUsers = await models.getAllUser();
  const result = getUsers.length - 1;
  const users = getUsers[result];
  const token = jwtConfig.createToken(users);

  return { type: null, message: { token } };
};

const getUser = async (users:TUser) => {
  const user = await models.getLogin(users);

  const token = jwtConfig.createToken(user[0]);
  console.log(token);
  
  return { token };
};

export default {
  getAlProducts,
  insertProduct,
  getAllUsers,
  insertUser,
  getUser,
};