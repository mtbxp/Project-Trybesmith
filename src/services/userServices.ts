import userModel from '../models/userModel';

const getAllSevice = async () => {
  const result = await userModel();
  return result; 
};

export default getAllSevice;