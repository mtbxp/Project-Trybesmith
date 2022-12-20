import jwt from 'jsonwebtoken';
import addUsers from '../models/userModel';
import UserInput from '../types/user';

const secret = 'banana';

const addNewUser = async (userDate: UserInput) => {
  const { username, vocation, level } = userDate;
  const token = jwt.sign(
    { date: { username, vocation, level } }, 
    secret,
  );

  await addUsers(userDate);
  return { status: 201, date: { token } };
};

export default addNewUser;