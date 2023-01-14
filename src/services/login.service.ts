import Login from '../interfaces/login.interface';
import usersModel from '../models/users.model';
import newToken from '../middlewares/generateToken';

const loginUser = async (login: Login) => {
  const [logged] = await usersModel.findUser(login);  

  const token = newToken(logged);
  return token;
};

export default loginUser;