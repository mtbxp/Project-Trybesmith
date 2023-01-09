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
    validateLevel,
    validateVocation,
    registerUser,
    validatePassword,
  );

export default router;