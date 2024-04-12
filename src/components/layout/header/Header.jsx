import Logo from "../../Logo/Logo"
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