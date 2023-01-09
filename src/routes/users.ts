import Router from 'express';
import registerUser from '../controllers/users';
import { validateLevel,
  validatePassword,
  validateUsername,
  validateVocation,
} from '../middlewares/users';

const router = Router();

router
  .post(
    '/', 
    validateUsername,
    validateVocation,
    validateLevel,
    validatePassword,
    registerUser,
  );

export default router;