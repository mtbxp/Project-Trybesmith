import jwt from 'jsonwebtoken';

// const jwtConfig = {
//   algorithm: 'HS256',
//   expiresIn: '15min',
// };

// const validateToken = async (req, res, next) => {
//   const token = req.header('Authorization');
//   if (!token) return res.status(401).json({ message: 'Token not found' });
//   try { 
//     const validated = jwt.verify(token, process.env.JWT_SECRET);
//     console.log(validated, 'JWT_____10_ Token Validate');
//   } catch (err) {
//     if (err) return res.status(401).json({ message: 'Expired or invalid token' });
//   }
//   next();
// };

// const getIdFromToken = async (token) => {
//   const validated = jwt.verify(token, process.env.JWT_SECRET, jwtConfig);
//   const id = validated.data.userId;
//   return id;
// };

const secret = process.env.JWT_SECRET as string;

const createToken = async (id: number) => {
  const token = jwt
    .sign({ data: { userId: id } }, secret, { algorithm: 'HS256', expiresIn: '20min' });
  return token as string;
};

export default createToken;
