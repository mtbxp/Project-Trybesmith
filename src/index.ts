import app from './app';
import addProducts from './controllers/productContrl';

const PORT = 3000;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

// initial commit

app.post('/products', addProducts);

export default server;
