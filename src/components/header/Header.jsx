import Logo from "../logo/Logo"
import User from "../user/User"

import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <User />
    </header>
  )
}