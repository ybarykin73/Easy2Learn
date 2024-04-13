import { sql } from '@vercel/postgres'

export async function getProfileInfo(id) {
  try {
    const data = await sql`SELECT name, email FROM users WHERE id=${id}`

    return data.rows[0]
  } catch (error) {
    console.log('data error', error)
  }
}