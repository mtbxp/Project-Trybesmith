import app from './app';
import statusCodes from './statusCodes';

const PORT = 3000;

app.get('/', (_req, res) => {
  res.status(statusCodes.OK).send('Express + TypeScript');
});

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;
