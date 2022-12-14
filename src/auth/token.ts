// require('dotenv/config');
// const jwt = require('jsonwebtoken');

// const secret = process.env.JWT_SECRET || 'seusecretdetoken';

// const jwtConfig = {
//   expiresIn: '1h',
//   algorithm: 'HS256',
// };

// const createToken = (user) => {
//   const token = jwt.sign({ data: user }, secret, jwtConfig);
//     return token;
// };

// const validateToken = (token) => {
//   try {
//     const payload = jwt.verify(token, secret);
//     return payload;
//   } catch (error) {
//     console.log(error);
//     return {
//       isError: true,
//       message: 'Expired or invalid token',
//     };
//   }
// };

// module.exports = {
//   createToken,
//   validateToken,
// };