import { GetServerSideProps, NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { User } from '../types/types'
import { useRouter } from 'next/router'
import { authAxios } from '@/types/api/axios'
import { HeaderWithBody } from '../components/layouts/HeaderWithBody'
import TodoCard from '../components/parts/TodoCard'
import { useCommonModal } from '../contexts/modal-context';
import { DeleteModal } from '../components/parts/DeleteModal'
import { useAuth } from '@/contexts/auth-context'

const MyPage: NextPage = () => {
  const router = useRouter()
  const { showModal } = useCommonModal()
  const { authToken } = useAuth()
  const [user, setUser] = useState<User>()

  const getUser = async (authToken: string) => {
    const { data } = await authAxios.get('http://localhost:3000/api/v1/users', {
      headers: {'Authorization': `Bearer: ${authToken}`},
    })
    setUser(data)
  }

  const updateUser = async (user: User) => {
    await authAxios.put('http://localhost:3000/api/v1/users', user, {
      headers: {'Authorization': `Bearer: ${authToken}`},
    })
  }

  useEffect(() => {
    if (authToken) getUser(authToken)
  },[authToken])

  return (
    <HeaderWithBody>
      <div className='flex flex-col bg-white justify-center align-center'>
        <div className='flex'>
          <div className='w-1/4 p-4'>
            <p className='text-3xl mb-2'>Profile</p>
            <div className='border-2 rounded-lg border-gray-500 p-6'>
              <div className='flex justify-between'>
                <label className='text-lg'>id</label>
                <p className='text-lg'>{user?.id}</p>
              </div>
              <div className='flex justify-between'>
                <label className='text-lg'>name</label>
                <p className='text-lg'>{user?.name}</p>
              </div>
              <div  className='flex justify-between'>
                <label className='text-lg'>email</label>
                <p className='text-lg'>{user?.email}</p>
              </div>
            </div>
            <p className='text-3xl my-2'>Settings</p>
            <div className='border-2 rounded-lg border-gray-500 p-6'>
              <p className='hover:text-gray-500' onClick={() => router.push('/user/edit')}>edit profile</p>
              <p 
                className='hover:text-gray-500'
                onClick={() => 
                  showModal(
                    <DeleteModal 
                      message='hello' 
                      deleteAction={() => console.log('hello')}
                    />
                  )
                }
              >
                delete account
              </p>
            </div>
          </div>
          <div className='w-3/4 p-4'>
            <p className='text-3xl mb-2'>Todo List</p>
            <div className='border-2 rounded-lg border-gray-500 p-6'>
              {
                user?.todos && user.todos.length !== 0 ? (
                  user.todos.map((todo, index) => {                
                    return (    
                      <TodoCard key={index} todo={todo}/>
                    )
                  })
                ) : (
                  <p>no todo</p>
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