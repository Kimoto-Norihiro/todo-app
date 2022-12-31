import React, { useState, useEffect } from 'react'
import TodoInList from '../../parts/todo/TodoInList'

type Todo = {
  id: number,
  title: string,
  text: string
}

type Props = {
  todos: Todo[]
}

export const todoList = ({ todos }: Props) => {
  return (
    <div>
      {
        todos.map((todo, index) => (
          <TodoInList key={index} todo={todo}/>
        ))  
      }
    </div>
  )
}

export default todoList