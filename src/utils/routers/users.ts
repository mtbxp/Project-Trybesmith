import express from 'express';

import createuUser from '../../controllers/users.controller';

const router = express.Router();

router.post('/', createuUser);

export default router;