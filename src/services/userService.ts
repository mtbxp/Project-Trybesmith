import { User, UserInserted } from '../interfaces';
import userModel from '../models/userModel';
import createToken from '../auth/validateJWT';

const insertNewUser = async (newUser: User): Promise<UserInserted> => {
  const userCreated = await userModel(newUser);
  // const { password, level, vocation, ...others } = userCreated;
  // console.log(userCreated);

  const token = createToken(userCreated);

  return { statusCode: 201, token };
};

export default { insertNewUser };
