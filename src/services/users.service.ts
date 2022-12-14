import jwt from 'jsonwebtoken';
import { TUser } from '../models/interfaces';
import UsersModel from '../models/users.model';

const secret = process.env.JWT_SECRET || 'SeuSegredoAqui';

const generateUserToken = ({ id, username, vocation, level }: TUser):string => {
  const payload = { id, username, vocation, level };
  const token: string = jwt
    .sign(payload, secret, { algorithm: 'HS256', expiresIn: '15d' }); 
  return token;
};

const addNewUser = async (newUser: TUser): Promise<string> => {
  const idNewUser: number = await UsersModel.insertNewUser(newUser);
  
  const newUserAdded: TUser = {
    id: idNewUser,
    username: newUser.username,
    vocation: newUser.vocation,
    level: newUser.level,
  };  

  const tokenUser = generateUserToken(newUserAdded);

  return tokenUser;
};

export default { addNewUser };