import express from 'express';

import createuUser from '../../controllers/users.controller';
import { validateBody, validateBodyUser, 
  validateCaracters, validateInfoBody } from '../middleware/loginValidations';

const router = express.Router();

router.post(
  '/', 
  validateBody, 
  validateBodyUser, 
  validateCaracters, 
  validateInfoBody,
  createuUser,
);

export default router;