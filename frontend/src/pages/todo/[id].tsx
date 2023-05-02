import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import React, { useState } from 'react'
import { HeaderWithBody } from '../../components/layouts/HeaderWithBody'
import { InputWithError } from '../../components/parts/InputWithError'
import { useForm } from 'react-hook-form'
import { Todo } from '../../types/types'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

type Props = {
  id: string
}

const todoSchema = yup.object().shape({
  title: yup.string().email('invalid email').required('required input'),
})

const EditTodo: NextPage<Props> = ({ id }) => {
  const [err, setErr] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm<Todo>({
    resolver: yupResolver(todoSchema),
    defaultValues: {
      title: `title ${id}`,
      body: `body ${id}`
    }
  });

  return (
    <HeaderWithBody>
      <div className='flex flex-col bg-white justify-center align-center p-10'>
        <div className='flex justify-center text-3xl'>
          <h1>Edit Todo</h1>
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

export const getStaticPaths: GetStaticPaths<Props> = async () => {
  // const res = await fetch('https://example.com/api/users');
  // const users = await res.json();

  // パスを生成
  // const paths = users.map((user: User) => ({
  //   params: { id: user.id.toString() },
  // }));

  const paths = [1,2,3,4,5].map((i) => ({
    params: { id: i.toString() }
  }))

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
  return {
    props: {
      id: params?.id?.toString() || '1',
    },
  };
};

export default EditTodo