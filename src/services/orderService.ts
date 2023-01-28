import ordersModel from '../models/ordersModel';
import productModel from '../models/productModel';
import userModel from '../models/userModel';

const getAllOrders = async () => {
  const orders = await ordersModel.getAllOrders();
  return orders;
};

const addOrder = async (productsIds: number[], username: string) => {
  const user = await userModel.getUser(username);
  const order = await ordersModel.addOrder(user[0].id);
  await Promise.all(productsIds.map(async (productId) => {
    await productModel.updateProductPeloId(productId, order.insertId);
  }));
  const resultado = {
    userId: user[0].id,
    productsIds,
  };
  return { type: null, message: resultado };
};

export default { getAllOrders, addOrder };