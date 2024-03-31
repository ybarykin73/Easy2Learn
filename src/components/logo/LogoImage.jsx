import Image from 'next/image'
import logoImage from './Logo.png'

export default function LogoImage({alt}) {
  return (
    <Image 
      src={logoImage}
      width={30}
      height={24}
      alt={alt}
    />
  )
}