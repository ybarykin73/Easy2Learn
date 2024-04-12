'use server'

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function userLogin (prevState, formData,) {
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