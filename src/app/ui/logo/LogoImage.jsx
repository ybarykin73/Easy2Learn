import Image from 'next/image'

export default function LogoImage({alt}) {
  return (
    <Image 
      src={'/Logo.png'}
      width={30}
      height={24}
      alt={alt}
    />
  )
}