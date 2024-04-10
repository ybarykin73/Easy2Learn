'use client'

import { useFormState } from 'react-dom'

import Link from 'next/link'
import Button from '@/app/ui/subcomponents/button/Button'

import { loginUser } from '@/app/lib/actions'

export default function LoginForm() {
  const [state, dispatch] = useFormState(loginUser, undefined)

  return (
    <form className='auth-form__body' action={dispatch}>
      <div className='auth-form__main'>
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
        <Link className='auth-form__link' href="./forgot-password">Забыли пароль?</Link>
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
