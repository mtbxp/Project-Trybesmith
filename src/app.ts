import express from 'express';
// import express, { NextFunction, Request, Response } from 'express';
import router from './Routers';
import 'express-async-errors';

const app = express();

app.use(express.json());
app.use('/products', router.productsRoute);
app.use('/orders', router.ordersRoute);
app.use('/users', router.userRoute);

// app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
//   const { name, message, details } = err as any;
//   // console.log(`name: ${name}`);
//   switch (name) {
//     case 'BadRequestError':
//       res.status(400).json({ message });
//       break;
//     case 'ValidationError':
//       res.status(400).json({ message: details[0].message });
//       break;
//     case 'NotFoundError':
//       res.status(404).json({ message });
//       break;
//     case 'ConflictError':
//       res.status(409).json({ message });
//       break;
//     default: console.error(err);
//       res.sendStatus(500);
//   }
//   next();
// });

export default app;
