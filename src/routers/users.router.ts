import express from 'express';
import usersController from '../controllers/users.controller';

const router = express.Router();

router.post('/users', usersController.createUser);

export default router;