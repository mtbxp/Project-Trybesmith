import * as jwt from 'jsonwebtoken';
import ProductController from './controllers/Product.controller';
import connection from './models/connection';
import ProductModel from './models/Product.model';
import ProductService from './services/Product.service';
import UserModel from './models/User.model';
import UserService from './services/User.service';
import UserController from './controllers/User.controller';
import AuthService from './services/Auth.service';
import OrderModel from './models/Order.model';
import OrderService from './services/Order.service';
import OrderController from './controllers/Order.controller';

const authService = new AuthService(jwt);

const productModel = new ProductModel(connection);
const productService = new ProductService(productModel);
const productController = new ProductController(productService);

const userModel = new UserModel(connection);
const userService = new UserService(userModel, authService);
const userController = new UserController(userService);

const orderModel = new OrderModel(connection);
const orderService = new OrderService(orderModel);
const orderController = new OrderController(orderService);

export {
  productController,
  userController,
  orderController,
};
