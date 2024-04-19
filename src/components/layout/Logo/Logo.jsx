'use client'

import Link from 'next/link'
import Image from 'next/image'

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
              <Image 
                src={'/Logo.png'}
                width={30}
                height={24} 
                alt='Logo' 
              />
            : 
              <Link href={'/'}>
                <Image 
                  src={'/Logo.png'}
                  width={30}
                  height={24} 
                  alt='Logo' 
                />
              </Link>
          }
        </div>
        <div className='logo__text'>Easy2Learn</div>
      </div>
    </div>
  )
}