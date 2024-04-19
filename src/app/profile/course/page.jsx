import ProfileCourse from "@/components/views/profile/ProfileCourse/ProfileCourse"

export default async function Page() {

  const data = await fetch('http://localhost:3000/api/courses')
  const courses = await data.json()
  
  return (
    <ProfileCourse courses={courses} />
  )
}