import loginSchema from './loginSchema';

export default function validadeSchemaLogin(username: string, password: string)
  : { status: number | null, message: string } {
  const { error } = loginSchema.validate({ username, password });
  if (error) return { status: 400, message: error.message };
  return { status: null, message: '' };
}
