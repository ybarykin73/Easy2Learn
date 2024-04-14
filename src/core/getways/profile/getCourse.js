import { sql } from "@vercel/postgres";

export async function getCourse() {
  try {
    const data = await sql`SELECT * FROM course`
    
    return data.rows[0]
  } catch (error) {
    console.log(error)
  }
}