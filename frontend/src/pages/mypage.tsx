import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import { parseCookies } from 'nookies'
import { User } from '@/types/types'
import { useRouter } from 'next/router'
import axios from 'axios'
import { HeaderWithBody } from '@/components/layouts/HeaderWithBody'

type Props = {
  user: User
}

const MyPage: NextPage<Props> = ({user}: Props) => {
  return (
    <HeaderWithBody>
      <div className='flex flex-col bg-white justify-center p-10 align-center'>
        <div className='flex justify-center text-3xl'>
          <h1>My Page</h1>
        </div>
        <div className='flex justify-center'>
          <div className='w-96 mt-5'>
            <div className='flex justify-between align-middle border-b-2 border-gray-400 h-8'>
              <label className='text-2xl'>id</label>
              <div className='w-48'>
                <p className='text-2xl'>{user.id}</p>
              </div>
            </div>
            <div className='flex justify-between border-b-2 border-gray-400'>
              <label className='text-2xl'>name</label>
              <div className='w-48'>
                <p className='text-2xl'>{user.name}</p>
              </div>
            </div>
            <div  className='flex justify-between border-b-2 border-gray-400'>
              <label className='text-2xl'>email</label>
              <div className='w-48'>
                <p className='text-2xl'>{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderWithBody>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { token } = parseCookies(context)

  const response = await axios.get('http://localhost:8000/mypage', {
    headers: {'Authorization': `Bearer: ${token}`}
  })
  const { result, message, user } = response.data
  
  if (!result) {
    return {
      redirect: {
        permanent: false,
        destination: '/signin'
      }
    }
  }
  return {
    props: {
      result,
      message,
      user
    }
  }
}

export default MyPage