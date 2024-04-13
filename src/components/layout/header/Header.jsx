import Logo from "../../ui/Logo/Logo"
import User from "@/components/views/profile/ProfileUser/ProfileUser"

import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <User />
    </header>
  )
}