import Link from "next/link"

export default function Page() {
  return (
    <div>
      <h1>Мои тесты </h1>
      <p>Выберите ваш созданый курс для редактирования</p>
      <ul>
        <li>
          <Link href={'./tests/1'}>
            Мой курс 1
          </Link>  
        </li>
        <li>
          <Link href={'./tests/2'}>
            Мой курс 2
          </Link> 
        </li>
        <li>
          <Link href={'./tests/3'}>
            Мой курс 3
          </Link>  
        </li>
      </ul>
    </div>
  )
}