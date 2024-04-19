'use client'

import ErrorView from "@/components/Error/Error"

export default function Error({error, reset}) {
  return (
    <ErrorView
      error={error} 
      reset={reset}
    />
  )
}