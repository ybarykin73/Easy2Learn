'use server'
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

import z from 'zod'
import { sql } from '@vercel/postgres'
import {v4 as uuidv4} from 'uuid';
import bcrypt from 'bcrypt';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

const FormSchemaRegistrationUser = z.object({
  email: z
    .string()
    .min(1 , { message: 'Это поле обязательно!' })
    .email('Не привильно набран email'),
  password: z.string().min(6, { message: 'Пароль должен содержаить минимум 6 символов' }),
  confirmPassword: z.string(),

}).refine((data) => data.password === data.confirmPassword, {
  message: "Пароли должны быть одинаковыми!",
  path: ["confirmPassword"]
})

export async function registrationUser(prevState, formData) {
  const validatedFields = FormSchemaRegistrationUser.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword')
  })

  if(!validatedFields.success){
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Все поля обязательны для заполнения!',
    };
  }

  const { email, password } = validatedFields.data
  const id = uuidv4()

  try {
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password,salt)
    await sql`
      INSERT INTO users (id, email, password)
      VALUES(${id}, ${email}, ${hashPassword})
    `;
  } catch (error){
    // TODO нужно продумать как првоерять ошибки с бэка 
    console.error(error)
    return {message: 'Данный email уже используется!'}
  }

  revalidatePath('/auth/registration')
  redirect('/auth/success')
}

export async function loginUser(prevState, formData,) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          console.log(error.type)
          return 'Не верный email или пароль!';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}