import { Router } from 'express';
import * as usersController from '../controllers/usersController';
import validationLevel from '../middlewares/userLevelValidation';
import validationUserName from '../middlewares/userNameValidation';
import validationPassword from '../middlewares/userPasswordValidation';
import validationVocation from '../middlewares/userVocationValidation';

const router = Router();

router.post(
  '/', 
 
  validationUserName, 
  validationPassword,
  validationLevel,
  validationVocation,
  usersController.insertUserC,
);

export default router;