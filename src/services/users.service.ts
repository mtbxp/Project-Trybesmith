import User from '../interfaces/users.interface';
import connection from '../models/connection';
import UsersModel from '../models/users.model';

export default class UserService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public create = async (user: User): Promise<void> => 
    this.model.create(user);
}
