import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use((_error: unknown, _request: Request, response: Response, _next: NextFunction) =>
  response.status(500).json({ message: 'Internal server error' }));

export default app;
