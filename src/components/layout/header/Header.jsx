import Logo from "../../../app/ui/logo/Logo"
import User from "../../../app/ui/user/User"

import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <User />
    </header>
  )
}