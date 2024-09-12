import React from 'react'
import { CustomButtons } from './components/buttons/CustomButtons'

export const TailwindApp = () => {
  return (
    <>
      <div className='min-h-screen grid content-center 
        bg-gray-200 
        dark:bg-gray-700'>  
        <CustomButtons/>
      </div>
    </>
  )
}
