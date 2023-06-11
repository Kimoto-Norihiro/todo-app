import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import React, { useEffect, useState } from 'react'
import { HeaderWithBody } from '../../components/layouts/HeaderWithBody'
import { InputWithError } from '../../components/parts/InputWithError'
import { useForm } from 'react-hook-form'
import { Todo } from '../../types/types'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import axios from 'axios'
import { useAuth } from '@/contexts/auth-context'

type PathParams = {
  id: string
}

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const token = localStorage.getItem('token') || ''
  const { data } = await axios.get('http://localhost:3000/api/v1/todos', {
    headers: {'Authorization': `Bearer: ${token}`},
  })
  const todos = data.todos as Todo[]
  const paths = todos.map((todo) => ({
    params: { id: todo.id.toString() },
  })) || []
  return {
    paths,
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id
  const token = localStorage.getItem('token') || ''
  const { data } = await axios.get(`http://localhost:3000/api/v1/todos`, {
    headers: {'Authorization': `Bearer: ${token}`},
  })
  const todos = data.todos as Todo[]
  const todo = todos.find((todo) => todo.id === Number(id))

  return {
    props: {
      initial_todo: todo,
    },
  }
}

type TodoUpdateRequest = Pick<Todo, 'id' | 'title' | 'body'>

type Props = {
  initial_todo: TodoUpdateRequest
}

const todoSchema = yup.object().shape({
  title: yup.string().email('invalid email').required('required input'),
})

const EditTodo: NextPage<Props> = ({ initial_todo }) => {
  const [err, setErr] = useState('')
  const { authToken } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm<TodoUpdateRequest>({
    resolver: yupResolver(todoSchema),
  });
  const [todo, setTodo] = useState<TodoUpdateRequest>(initial_todo)

  const updateTodo = async (todo: TodoUpdateRequest) => {
    const response = await axios.put(`http://localhost:3000/api/v1/todos/${todo.id}`, { todo: todo }, { 
      headers: {'Authorization': `Bearer: ${authToken}`},
    })
  }

  const onSubmit = async () => {
    handleSubmit(async (data) => {
      const response = await updateTodo({
        id: data.id,
        title: data.title,
        body: data.body,
      })
      console.log(response)
    }, (err) => {
      console.log(err)
      console.log('error')
    })()
  }

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
            onSubmit()
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

export default EditTodo