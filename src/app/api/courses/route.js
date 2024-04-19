import { sql } from '@vercel/postgres'
import { NextResponse } from "next/server"

export async function GET() {
  const data = await sql`SELECT purchased_courses FROM users WHERE id='410544b2-4001-4271-9855-fec4b6a6442a'`
  const courses = data.rows[0].purchased_courses

  return NextResponse.json(courses)
}