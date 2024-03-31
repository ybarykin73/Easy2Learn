import Link from "next/link"

import './profileMenu.css'

export default function ProfileMenu() {
  return (
    <nav className="profile-nav">
      <ul className="profile-nav__list">
        <li className="profile-nav__list-item active">
          <Link href={'/profile'}>Профиль</Link>
        </li>
        <li className="profile-nav__list-item">
          <Link href={'/profile/tests'}>Мои тесты</Link>
        </li>
      </ul>
    </nav>
  )
}