import jwt from 'jsonwebtoken';
import User from '../models/users.models';

const secret: string = process.env.JWT_SECRET || 'secret';

const userLogim = async (username: string, password: string) => {
  const user = new User('', '', 0, '');
  const userLogin = await user.login(username);

  if (!userLogin.length) {
    return null;
  }

  const loggedUser = userLogin.find((u) => u.password === password);

  if (!loggedUser) {
    return null;
  }

  const token = jwt.sign({ data: loggedUser }, secret);

  return { token };
};

export default userLogim;
