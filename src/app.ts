import express from 'express';

import { productRoute, userRoute } from './Routes/routes';

const app = express();

app.use(express.json());

app.use('/', productRoute);
app.use('/', userRoute);

export default app;
