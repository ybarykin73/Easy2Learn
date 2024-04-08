'use client'

import clsx from 'clsx'
import { useFormState } from 'react-dom'

import Link from 'next/link'
import Button from '@/app/ui/subcomponents/button/Button'

// import { loginUser } from '@/app/lib/actions'

export default function LoginForm() {
  const initialState = { message: null, errors: {} };
  // const [state, dispatch] = useFormState(loginUser, initialState)

  return (
    <form className='auth-form__body' action={dispatch}>
      <div className='auth-form__main'>
        <input className={clsx('input', {'error': state?.errors?.email})} name='email' type="text" />
        {
          state.errors?.email &&
          state.errors.email.map(error => (
            <p className='auth-form__error' key={error} > 
              { error }
            </p>
          ))
        }
        <input className={clsx('input', {'error': state?.errors?.password})} name='password' type="password" />
        {
          state.errors?.password &&
          state.errors.password.map(error => (
            <p className='auth-form__error' key={error} > 
              { error }
            </p>
          ))
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
