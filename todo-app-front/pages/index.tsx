import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export const Home: NextPage = () => {
  return (
    <div className='h-[100%] bg-fuchsia-400 justify-center items-center flex flex-col'>
      <div>
        <p className='text-6xl font-bold'>Welcome todo app</p>
      </div>
      <div>
        <Link href='/login'>
          <p>register</p> 
        </Link>
      </div>
    </div>
  )
}

export default Home
