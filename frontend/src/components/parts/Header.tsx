import React from 'react'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/router'

export const Header = () => {
  const { authToken,logout } = useAuth()
  const router = useRouter()
  return (
    <div className='bg-black flex py-2'>
      <div className='mx-auto container flex items-center justify-between'>
        <p className='text-white font-bold text-3xl'>Todo app</p>
        <p 
          className='text-white'
          onClick={() => {
            if (authToken) logout()
            router.push('/signin')
          }}
        >
          sign {authToken ? 'out' : 'in'}
        </p>     
      </div>
    </div>
  )
}