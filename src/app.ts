import express from 'express';
import controllers from './controllers/controllers';

const app = express();

app.use(express.json());

app.get('/products', controllers.getAllProducts);

export default app;
