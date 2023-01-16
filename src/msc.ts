import * as jwt from 'jsonwebtoken';
import ProductController from './controllers/Product.controller';
import connection from './models/connection';
import ProductModel from './models/Product.model';
import ProductService from './services/Product.service';
import UserModel from './models/User.model';
import UserService from './services/User.service';
import UserController from './controllers/User.controller';
import AuthService from './services/Auth.service';

const authService = new AuthService(jwt);

const productModel = new ProductModel(connection);
const productService = new ProductService(productModel);
const productController = new ProductController(productService);

const userModel = new UserModel(connection);
const userService = new UserService(userModel, authService);
const userController = new UserController(userService);

export {
  productController,
  userController,
};
