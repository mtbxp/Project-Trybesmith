// import { BadRequestError } from 'restify-errors';
import connection from '../models/connection';
import UsersModel from '../models/users.model';
import Users from '../interfaces/users.interface';

// const properties = ['username', 'vocation', 'level', 'password'];

class UserService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  // static validateProperties(product: Product): [boolean, string, | null] {
  //   for (let i = 0; i < properties.length; i += 1) {
  //     if (!Object.prototype.hasOwnProperty.call(product, properties[i])) {
  //       return [false, properties[i]];
  //     }
  //   }
  //   return [true, null];
  // }
  
  // static validateValues(product: Product): [boolean, string | null] {
  //   const entries = Object.entries(product);
  //   for (let i = 0; i < entries.length; i += 1) {
  //     const [property, value] = entries[i];
  //     if (!value) {
  //       return [false, property];
  //     }
  //   }
  //   return [true, null];
  // }
  
  // static validationProduct(product: Product): void | string {
  //   let [valid, property] = UserService.validateProperties(product);
  
  //   if (!valid) {
  //     return `O campo ${property} é obrigatório.`;
  //   }
  //   [valid, property] = UserService.validateValues(product);
  
  //   if (!valid) {
  //     return `O campo ${property} não pode ser nulo ou vazio.`;
  //   }
  // }

  public create(user: Users): Promise<Users> {
    // const isValidProduct = UserService.validationProduct(product);
  
    // if (typeof isValidProduct === 'string') {
    //   throw new BadRequestError(isValidProduct);
    // }
    return this.model.create(user);
  }
}

export default UserService;