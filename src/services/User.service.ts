import UserModel from '../models/User.model';
import { User } from '../utils/types/User.types';
import AuthService from './Auth.service';

export default class UserService {
  constructor(private model: UserModel, private tokenService: AuthService) {
    this.model = model;
    this.tokenService = tokenService;
  }

  public async create(data: User): Promise<string> {
    const id = await this.model.create(data);
    const token = await this.tokenService.generate(id);

    return token;
  }
}
