import express from 'express';
import mainRouter from './routes';

const app = express();

app.use(express.json());

mainRouter(app);

export default app;
