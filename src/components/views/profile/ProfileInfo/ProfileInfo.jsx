'use client'

import { useRef } from 'react'
import { useFormState } from 'react-dom'

import Button from "@/components/ui/button/Button"

import userUpdate from "@/core/getways/server/userUpdate"

import './ProfileInfo.css'

export default function ProfileInfo({user}) {
  const formRef = useRef()

  const userUpdateWithId = userUpdate.bind(null, user.id)
  const [state, dispatch] = useFormState(userUpdateWithId, null)

  const resetForm = () => {
    formRef.current.reset()
  }

  return (
    <div className='profile-info'>
      <form 
        ref={formRef} 
        action={dispatch}
        className='profile-info__form'
      > 
        <div className='profile-info__body'>
          <input className="input" name='email' type="text" defaultValue={user.email} />
          <input className="input" name='name' type="text" defaultValue={user.name} />
        </div>
        <div className='profile-info__tool-bar'>
          <Button variant='primary'>Сохранить</Button>
          <Button variant='secondary' onClick={resetForm}>Отмена</Button>
        </div>
      </form>
    </div>
  )
}