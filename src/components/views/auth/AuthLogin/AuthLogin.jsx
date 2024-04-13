import Link from "next/link"

import LoginForm from "@/components/Form/auth/login/LoginForm"

export default function AuthLogin () {
  return (
    <div className="auth-form">
      <div className='auth-form__header'>
        <h1 className="auth-form__title">Войти</h1>
        <p className="auth-form__sub-title">введите ваши учетные данные</p>
      </div>
      <LoginForm />
      <div className="auth-form___footer">
        <p>Еще не зарегистрированы?  <Link className='auth-form__link' href="./registration">Создать Аккаунт</Link></p>
      </div>
    </div>
  )
}