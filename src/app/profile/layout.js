import ProfileMenu from './profile-menu/profileMenu'
import './layout.css'

export default function ProfileLayout({ children }) {
  return (
    <div className='profile'>
      <aside>
        <ProfileMenu />
      </aside>
      <main>
        {children}
      </main>
    </div>
  )
}