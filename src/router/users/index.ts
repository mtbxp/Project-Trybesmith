import express = require('express');
import insertUserController from '../../controllers/users';

const router = express.Router();

router.post('/users', insertUserController);

export default router;