import jwt from 'jsonwebtoken';
import User from '../models/users';

const secret: string = process.env.JWT_SECRET || 'secret';

const userLogin = async (username: string, password: string) => {
  const user = new User('', '', 0, '');
  const userLogging = await user.login(username);

  if (!userLogging.length) {
    return null;
  }

  const loggedUser = userLogging.find((u) => u.password === password);

  if (!loggedUser) {
    return null;
  }

  const token = jwt.sign({ data: loggedUser }, secret);

  return token as string;
};

export default userLogin;