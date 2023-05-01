import React from 'react'

export const Header = () => {
  return (
    <div className='bg-black flex py-2'>
      <div className='mx-auto container flex items-center justify-between'>
        <p className='text-white font-bold text-3xl'>Todo app</p>
        <p className='text-white'>sign out</p>     
      </div>
    </div>
  )
}