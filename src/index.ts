import app from './app';

const PORT = 3000;

const server = app.listen(PORT, () => console.log(
  `Running on PORT: ${PORT}`,
));

export default server;
