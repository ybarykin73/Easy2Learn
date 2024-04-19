'use server'

import z from 'zod'
import { sql } from '@vercel/postgres'
import {v4 as uuidv4} from 'uuid';
import bcrypt from 'bcrypt';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

const FormSchemaR = z.object({
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

export default async function userRegistration (prevState, formData) {
  const validatedFields = FormSchemaR.safeParse({
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
