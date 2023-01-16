/* const statusCode = {
  'any.required': 400,
  'string.empty': 400,
  'number.min': 422,
  'string.min': 422,
  'string.base': 422,
  'number.exist': 404,
}; */

/* console.log(statusCode['any.required']);

 */
const statusCode = (error: string): number => {
  if (error === 'any.required') return 400;
  return 422;
};

export default statusCode;