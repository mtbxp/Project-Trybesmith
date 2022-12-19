import Router from 'express';
import register from '../controllers/users.controllers';
import {
  validateUsername,
  validateVocation,
  validateLevel,
  validatePassword } from '../middlewares/users.middlewares';

const router = Router();

router
  .post(
    '/', 
    validateUsername,
    validateVocation,
    validateLevel,
    validatePassword,
    register,
  );

export default router;