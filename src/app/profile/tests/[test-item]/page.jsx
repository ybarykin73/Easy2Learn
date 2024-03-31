'use client'

import { useRouter } from 'next/navigation'

export default function Page() {

  const router = useRouter()

  return (
    <div>
        <button onClick={() => router.back()}>Вернуться к списку курсов</button>
    </div>
  )
}