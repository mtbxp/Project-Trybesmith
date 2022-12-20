import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'tokensecreto';

const generateUserToken = async (username: string, vocation: string, level: number, id: number) => {
  const token = jwt.sign({ data: { 
    id,
    username,
    vocation,
    level,  
  } }, secret);

  return token;
};

export default generateUserToken;