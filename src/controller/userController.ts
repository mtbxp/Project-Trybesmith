import userService from '../services/userServices';

const getAllController = async (_req: string, res: any) => {
  const message = await userService();
  return res.status(200).json(message);
};

export default getAllController;