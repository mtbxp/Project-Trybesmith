import { Router } from 'express';
import userController from '../controllers/user.controller';

const useRouter = Router();

useRouter.post('/', userController.createNewUserController);

export default useRouter;