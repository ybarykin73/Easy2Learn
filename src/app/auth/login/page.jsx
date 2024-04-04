'use client'

import Link from 'next/link'
import Button from '@/app/ui/subcomponents/button/Button'

import {createNewUser} from '@/app/lib/actions'

import '../auth.css'

export default function page() {

  return (
    <div className="auth-form">
      <div className='auth-form__header'>
        <h1 className="auth-form__title">Войти</h1>
        <p className="auth-form__sub-title">введите ваши учетные данные</p>
      </div>
      <form className='auth-form__body' action={createNewUser}>
        <div className='auth-form__main'>
          <input className='input' name='email' type="text" />
          <input className='input' name='password' type="password" />
        </div>
        <div className="auth-form__help">
          <label>
            <input name='remember' type="checkbox" />
            Запомнить
          </label>
          <Link className='auth-form__link' href="./forgot-password">Забыли пароль?</Link>
        </div>
        <Button
          ariaLabel='Войти'
          variant='primary'
        >
          Войти
        </Button>
      </form>
      <div className="auth-form___footer">
        <p>Еще не зарегистрированы?  <Link className='auth-form__link' href="./registration">Создать Аккаунт</Link></p>
      </div>
    </div>
  )
}