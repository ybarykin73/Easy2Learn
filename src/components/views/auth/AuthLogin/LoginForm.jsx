'use client'

import { useFormState } from 'react-dom'

import Link from 'next/link'
import Button from '@/components/ui/button/Button'

import userLogin from '@/core/getways/server/userLogin'

export default function LoginForm() {
  const [state, dispatch] = useFormState(userLogin, undefined)

  return (
    <form className='auth-form__body' action={dispatch}>
      <div className='auth-form__main'>
        {/* TODO Вынести input в отдельный компонент */}
        <input className='input' name='email' type="text" />
        <input className='input' name='password' type="password" />
        {
        state && 
        <p className='auth-form__error' > 
          { state }
        </p>
      }
      </div>
      <div className="auth-form__help">
        <label>
          <input name='remember' type="checkbox" />
          Запомнить
        </label>
        <Link className='auth-form__link' href="/auth/forgot-password">Забыли пароль?</Link>
      </div>
      <Button
        ariaLabel='Войти'
        variant='primary'
      >
        Войти
      </Button>
    </form>
  )
}
