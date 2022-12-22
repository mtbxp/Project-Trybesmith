import express from 'express';
// import ProductController from './controllers/productController';
import productController from './controllers/productController';

const app = express();
app.use(express.json());

// const productController = new ProductController();

app.get('/products', productController.getAll);
app.post('/products', productController.insert);

// app.use(err: Error, req: Request, res: Response, next: NextFunction) middleware de erro!!!!

export default app;
