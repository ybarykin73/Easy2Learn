'use server'
import z from 'zod'

const LoginFormSchema = z.object({
  email: z
    .string()
    .email('Неверный формат email'),
  password: z
    .string()
    .min(6, { message: 'Пароль должен содержать минимум 6 символов' })
})

const CreateLoginUser = LoginFormSchema.omit({id:true, date: true})

export async function loginUser(prevState, formData) {

  const validatedFields = CreateLoginUser.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    remember: formData.get('remember')
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Неверно указан email или пароль!',
    };
  }
  const {email, password} = validatedFields.data

  console.log(email, password)
}