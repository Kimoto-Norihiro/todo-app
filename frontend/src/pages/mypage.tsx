import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import { parseCookies } from 'nookies'
import { User } from '../types/types'
import { useRouter } from 'next/router'
import axios from 'axios'
import { HeaderWithBody } from '../components/layouts/HeaderWithBody'
import TodoCard from '../components/parts/TodoCard'
import { useCommonModal } from '../hooks/modal-context';

const MyPage: NextPage = () => {
  const router = useRouter()
  const { showModal } = useCommonModal()
  return (
    <HeaderWithBody>
      <div className='flex flex-col bg-white justify-center align-center'>
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
              <p className='hover:text-gray-500' onClick={() => router.push('/user/edit')}>edit profile</p>
              <p className='hover:text-gray-500' onClick={() => showModal(<DeleteModal/>)}>delete account</p>
            </div>
          </div>
          <div className='w-3/4 p-4'>
            <p className='text-3xl mb-2'>Todo List</p>
            <div className='border-2 rounded-lg border-gray-500 p-6'>
              {
                [1,2,3,4,5,6,7,8,9,10].map((i) => {
                  let todo = {
                    id: i.toString(),
                    title: `title ${i}`,
                    body: `body ${i}`
                  }
                  return (    
                    <TodoCard key={i} todo={todo}/>
                  )
                }
              )
              }
              <div onClick={() => router.push('/todo/create')}>
                <p className='text-blue-500 hover:text-blue-700'>+ add todo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderWithBody>
  )
}

export default MyPage

const DeleteModal = () => {
  const { closeModal } = useCommonModal()
  const deleteAction = () => {
    console.log('delete')
  }

  return (
    <div className="bg-white p-10 rounded-lg">
      <p>are you really delete it ?</p>
      <div className='flex justify-between items-center p-2'>
        <div onClick={deleteAction}>
          yes
        </div>
        <div onClick={() => closeModal()}>
          cancel
        </div>
      </div>
    </div>
  )
}