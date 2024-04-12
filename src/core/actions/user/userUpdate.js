'use server'

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import {permanentRedirect} from 'next/navigation'

export async function userUpdate(id, prevState, formData) {

  const name = formData.get('name')
  const email = formData.get('email')

  try {
    await sql`
    UPDATE users
    SET name = ${name}, email = ${email}
    WHERE id = ${id}
    `
  } catch (error) {
    console.error(error)
  }

  revalidatePath('/profile')
  permanentRedirect('/profile')
}