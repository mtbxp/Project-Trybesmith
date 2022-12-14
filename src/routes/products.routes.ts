import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const router = Router();

const productController = new ProductController();

router.get('/', productController.getAll);

// router.get(booksSlashId, bookController.getById);

// router.post('/books', bookController.create);

// router.put(booksSlashId, bookController.update);

// router.delete(booksSlashId, bookController.remove);

export default router;