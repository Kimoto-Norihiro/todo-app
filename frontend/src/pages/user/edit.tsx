import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { User } from '../../types/types'
import { useRouter } from 'next/router'
import axios from 'axios'
import { InputWithError } from '../../components/parts/InputWithError'
import { HeaderWithBody } from '../../components/layouts/HeaderWithBody';
import { useAuth } from '@/contexts/auth-context'

const userEditSchema = yup.object().shape({
  name: yup.string().required('required input'),
  email: yup.string().email('invalid email').required('required input'),
})

export type userEditFormValues = Pick<User, "id" | "email" | "name">

const SignUp: NextPage = () => {
  const [err, setErr] = useState('')
  const [user, setUser] = useState<userEditFormValues>()
  const router = useRouter()
  const { authToken } = useAuth()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<userEditFormValues>({
    resolver: yupResolver(userEditSchema)
  })

  const getUser = async () => {
    const { data } = await axios.get('http://localhost:8000/api/v1/users', {
      withCredentials: true,
      headers: {'Authorization': `Bearer: ${authToken}`},
    })
    setUser(data)
  }

  const updateUser = async (user: userEditFormValues) => {
    const response = await axios.put('http://localhost:8000/api/v1/users', user, {
      withCredentials: true,
      headers: { 'Authorization': `Bearer ${authToken}` },
    })
  }

  const submit = () => {
    handleSubmit(async (data) => {
      const response = await updateUser(data)
      await router.back()
    }, () => {
      console.log('error')
    })()
  }

  useEffect(() => {
    getUser()
  },[authToken])

  useEffect(() => {
    if (user) reset(user)
  }, [user])

  return (
    <HeaderWithBody>
      <div className='flex flex-col bg-white justify-center p-10 align-center'>
        <div className='flex justify-center text-3xl'>
          <h1>Edit Profile</h1>
        </div>
        <div className='flex p-5 justify-center'>
          <form 
            className='w-96 p-3' 
            onSubmit={(e) => {
              e.preventDefault()
              submit()
            }}>
            <InputWithError 
              name='name'
              register={register}
              errors={errors}
            />
            <InputWithError 
              name='email'
              register={register}
              errors={errors}
            />
            {
              err ? <div className='text-red-800 text-sm'>{err}</div> : <div className='h-5'></div>
            }
            <div className='flex justify-center mt-5'>
              <div className='bg-gray-200 py-1 px-3 rounded-lg'>
                <button type='submit'>submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </HeaderWithBody>
  )
}

export default SignUp