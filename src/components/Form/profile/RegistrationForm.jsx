'use client'

import clsx from 'clsx'
import { useFormState } from 'react-dom'

import { registrationUser } from '@/app/lib/actions'

import Button from '@/components/ui/button/Button'

export default function RegistrationForm() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(registrationUser, initialState)

  // TODO для поле профиля придумать смену password на text
  return (
    <form className='auth-form__body' action={dispatch} >
      <div className='auth-form__main'>
        <input className={clsx('input', {'error': state?.errors?.email})} name='email' type="text" />
        {
          state?.errors?.email &&
          state.errors.email.map(error => (
            <p className='auth-form__error' key={error} >
              {error}
            </p>
          ))
        }
        <input className={clsx('input', {'error': state?.errors?.password})} name='password' type="password" />
        {
          state?.errors?.password &&
          state.errors.password.map(error => (
            <p className='auth-form__error' key={error} >
              {error}
            </p>
          ))
        }
        <input className={clsx('input', {'error': state?.errors?.confirmPassword})} name='confirmPassword' type="password" />
        {
          state?.errors?.confirmPassword &&
          state.errors.confirmPassword.map(error => (
            <p className='auth-form__error' key={error} >
              {error}
            </p>
          ))
        }
        {
          state.message &&
          <p className='auth-form__error' >
            { state.message }
          </p>
        }
      </div>
      <Button
        ariaLabel='Войти'
        variant='primary'
      >
        Зарегистрироватся
      </Button>
    </form>
  )
}