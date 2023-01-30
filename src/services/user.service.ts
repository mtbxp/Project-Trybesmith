import jwt from 'jsonwebtoken';
import Users from '../interfaces/users.interface';
import UserModel from '../models/users.model';
import { secret, config } from '../middlewares/jwtConfig';
// import statusCodes from '../statusCodes';
// import IToken from '../interfaces/iToken';

// interface ResponseLogin extends Users {
//   message: IToken | string
// }

class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public async create(user: Users) {
    const payload = await this.model.create(user);
    const token = jwt.sign({ payload }, secret, config);
    const data = { token, ...payload };
    return data;
  }

  // public async generationToken(users: Users) => {
  //   const payload = { 
  //     user: users.username,
  //     password: users.password };
    
  //   return jwt.sign( 
  //     payload,
  //     process.env.JWT_SECRET as string,
  //     { algorithm: 'HS256', expiresIn: '1d' },
  //   );
  // };
  
  // public async login(username: string, password: string): Promise<ResponseLogin> {
  //   const user = await this.model.userLogin(username,password);
  //   if (!user) {
  //     return { Status: statusCodes.UNAUTHORIZED, message: 'Username or password invalid' }
  //     const token = jwt.sign({ data: { user: user.id } }, secret as string);
  //     return { status: statusCodes.OK, message: { token } },
  //   }
  // }
}
export default UserService;
