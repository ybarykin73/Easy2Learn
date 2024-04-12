import { auth } from "@/auth"
import { getProfileInfo } from "@/core/getways/profile/getProfileInfo"

import ProfileInfo from "@/components/views/profile/ProfileInfo/ProfileInfo"

export default async function Page() {
  const session = await auth()
  const user = await getProfileInfo(session.user.id)

  return (
    <ProfileInfo user={user} />
  )
}