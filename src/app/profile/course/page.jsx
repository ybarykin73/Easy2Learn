import { auth } from "@/auth"
import { getProfileCourse } from "@/core/getways/profile/getProfileCourse"

import ProfileCourse from "@/components/views/profile/ProfileCourse/ProfileCourse"

export default async function Page() {

  const session = await auth()
  const courses = await getProfileCourse(session.user.id)
  
  return (
    <ProfileCourse courses ={courses} />
  )
}