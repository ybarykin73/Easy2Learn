'use server'

import CourseCreate from '@/components/views/course/CourseCreate/CourseCreate'

import { getCourse } from '@/core/getways/profile/getCourse'

export default async function Page () {

  const course = await getCourse()

  return (
    <div>
      <CourseCreate course={course} />
    </div>
  )
}