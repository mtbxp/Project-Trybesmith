import usersCreateModel from '../models/users.model';
import Users from '../interface/users.interface';

const usersCreateService = async (user: Users) => {
  const result = await usersCreateModel(user);

  if (result.length > 0) return result;
};

export default usersCreateService;