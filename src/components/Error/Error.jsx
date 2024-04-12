'use client'

import { useEffect } from "react"

import Button from "@/app/ui/subcomponents/button/Button"

import './Error.css'

export default function ErrorView({error, reset}) {

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="error">
      <h1 className="error__title">Ошибка!</h1>
      <p className="error__text">Возникла непредвиденная ошибка, пожалуйста обновить страницу.</p>
      <Button 
        variant='primary'
        onClick={() => reset()}
        ariaLabel='reset'
      >
        Обновить
      </Button>
    </div>
  )
}