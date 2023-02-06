import User from '../interfaces/users.interface';
import connection from '../models/connection';
import UsersModel from '../models/users.model';

export default class UserService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public create = async (user: User) => 
    this.model.create(user);

  public login = async (login: User) => 
    this.model.login(login);
}
