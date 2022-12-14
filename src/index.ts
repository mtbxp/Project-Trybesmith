import app from './app';

const PORT = 3000;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

console.log('FOGUETE NÃO TEM RÉ #VQV');

export default server;
