import { NextPage } from 'next'
import React, { useState } from 'react'
import { HeaderWithBody } from '../../components/layouts/HeaderWithBody'
import { InputWithError } from '../../components/parts/InputWithError'
import { useForm } from 'react-hook-form'
import { Todo } from '../../types/types'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const todoSchema = yup.object().shape({
  title: yup.string().email('invalid email').required('required input'),
})

const CreateTodo: NextPage = () => {
  const [err, setErr] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm<Todo>({
    resolver: yupResolver(todoSchema),
  });

  return (
    <HeaderWithBody>
      <div className='flex flex-col bg-white justify-center align-center p-10'>
        <div className='flex justify-center text-3xl'>
          <h1>Create Todo</h1>
        </div>
        <div className='flex p-5 justify-center bg-white'>
          <form
            className='w-96 p-3' 
            onSubmit={(e) => {
            e.preventDefault()
          }}>
            <InputWithError 
              name='title'
              register={register}
              errors={errors}
            />
            <InputWithError 
              name='body'
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


export default CreateTodo