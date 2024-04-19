import { sql } from '@vercel/postgres'

export async function getProfileCourse(id) {
  try {
    const data = await sql`SELECT purchased_courses FROM users WHERE id=${id}`
    const courses = data.rows[0].purchased_courses

    return courses
  } catch (error) {
    console.log('data error', error)
  }
}