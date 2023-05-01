import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import { parseCookies } from 'nookies'
import { User } from '../types/types'
import { useRouter } from 'next/router'
import axios from 'axios'
import { HeaderWithBody } from '../components/layouts/HeaderWithBody'
import TodoCard from '@/components/parts/TodoCard'

const MyPage: NextPage = () => {
  return (
    <HeaderWithBody>
      <div className='flex flex-col bg-white justify-center align-center'>
        <div className='flex justify-center p-4'>
          <p className='text-5xl'>My Page</p>
        </div>
        <div className='flex'>
          <div className='w-1/4 p-4'>
            <p className='text-3xl mb-2'>Profile</p>
            <div className='border-2 rounded-lg border-gray-500 p-6'>
              <div className='flex justify-between'>
                <label className='text-lg'>id</label>
                <p className='text-lg'>1</p>
              </div>
              <div className='flex justify-between'>
                <label className='text-lg'>name</label>
                <p className='text-lg'>test</p>
              </div>
              <div  className='flex justify-between'>
                <label className='text-lg'>email</label>
                <p className='text-lg'>test@example.com</p>
              </div>
            </div>
            <p className='text-3xl my-2'>Settings</p>
            <div className='border-2 rounded-lg border-gray-500 p-6'>

            </div>
          </div>
          <div className='w-3/4 p-4'>
            <p className='text-3xl mb-2'>Todo List</p>
            <div className='border-2 rounded-lg border-gray-500 p-6'>
              {
                [1,2,3,4,5,6,7,8,9,10].map((i) => (
                  <TodoCard key={i}/>
                ))
              }
              <p className='text-blue-500 hover:text-blue-700'>+ add todo</p>
            </div>
          </div>
        </div>
      </div>
    </HeaderWithBody>
  )
}

export default MyPage