import Image from 'next/image'
import './AuthLayout.css'


export default function AuthLayout({ children }) {
  return (
    <div className="auth">
      <div className='auth__wrapper'>
        <div className='auth__header'>
          <Image
            src={'/Logo.png'}
            width={30}
            height={24}
            alt='Logo'
          />
          <h2 className='auth__title'>Easy2Learn</h2>
        </div>
        { children }
      </div>
    </div>
  )
}