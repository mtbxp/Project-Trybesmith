import app from './app';
// import productsRouter from './routers/products.router';

const PORT = 3000;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

// app.use(productsRouter);

export default server;
