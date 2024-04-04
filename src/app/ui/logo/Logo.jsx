'use client'

import Link from 'next/link'
import LogoImage from './LogoImage'
import { usePathname } from 'next/navigation'

import './Logo.css'

export default function Logo() {
  const pathname = usePathname()        

  return (
    <div className="logo">
      <div className='logo__wrapper'>
        <div className='logo__image'>
          {
            pathname === '/'
            ?
              <LogoImage alt='alt' />
            : 
              <Link href={'/'}>
                <LogoImage alt='alt' />
              </Link>
          }
        </div>
        <div className='logo__text'>Личный кабинет</div>
      </div>
    </div>
  )
}