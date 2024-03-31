import Link from "next/link"
import Image from "next/image"

import user from './User.png'

export default function User() {
  return (
    <div className="user">
      <Link href={'/profile'}>
        <Image 
          src={user}
          width={40}
          height={40}
          alt='User'
        />
      </Link>
    </div>
  )
}
