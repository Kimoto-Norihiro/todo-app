import React from 'react'

type Todo = {
    id: number,
    title: string,
    text: string
  }

const TodoInList = ({todo}:{todo:Todo}) => {
  return (
    <div key={todo.id}>{todo.title}</div>
  )
}

export default TodoInList