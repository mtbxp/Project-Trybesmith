import express from 'express';

const app = express();

app.use(express.json());

// app.use('/login', loginRouter);
// app.use('/products', productRouter);
// app.use('/users', usersRouter);
// app.use('/orders', orderRouter);

export default app;
