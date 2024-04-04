import Link from "next/link"
import Image from "next/image"

export default function User() {
  return (
    <div className="user">
      <Link href={'/profile'}>
        <Image 
          src={'/User.png'}
          width={40}
          height={40}
          alt='User'
        />
      </Link>
    </div>
  )
}
