import Link from 'next/link'

export default function AuthSuccess () {
  return (
    <div className="auth-success">
      <h1>Учетная запись созданна!</h1>
      <p>Перейдите на страницу <Link className='auth-form__link' href='./login'>авторизации</Link> чтобы войти в аккаунт</p>
    </div>
  ) 
}