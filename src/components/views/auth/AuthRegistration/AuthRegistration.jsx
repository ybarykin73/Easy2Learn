import Link from "next/link"

import RegistrationForm from "@/components/Form/profile/RegistrationForm"

export default function AuthRegistration () {
  return (
    <div className="auth-form">
      <div className='auth-form__header'>
        <h1 className="auth-form__title">Регистрация</h1>
        <p className="auth-form__sub-title">Создайте новый аккаунт используя форму ниже</p>
      </div>
      <RegistrationForm />
      <div className="auth-form___footer">
        <p>Уже зарегистрированы?  <Link className='auth-form__link' href="./login">Войти</Link></p>
      </div>
    </div>
  )
}