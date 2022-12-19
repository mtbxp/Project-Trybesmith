import jwt from 'jsonwebtoken';
import User from '../models/users.models';

const secret: string = process.env.JWT_SECRET || 'secret';

const userLogim = async (username: string, password: string) => {
  const user = new User('', '', 0, '');
  const userLogin = await user.login(username, password);

  const token = jwt.sign({ data: userLogin }, secret);

  return { token };
};

export default userLogim;
