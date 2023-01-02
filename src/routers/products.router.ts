import express from 'express';

const router = express.Router();

router.post('/', controllers.createProduct);

export default router;