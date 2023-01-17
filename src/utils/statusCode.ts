const statusCode = (error: string): number => {
  if (error === 'any.required') return 400;
  return 422;
};

export default statusCode;