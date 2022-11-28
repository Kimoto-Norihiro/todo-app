import React from 'react'
import TodoInList from '../../parts/todo/TodoInList'
import { useState, useEffect } from 'react';

type Todo = {
  id: number,
  title: string,
  text: string
}

export const todoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const propTodos = [
    {id: 1, title:'title1', text:'text1'},
    {id: 2, title:'title2', text:'text2'},
    {id: 3, title:'title3', text:'text3'},
    {id: 4, title:'title4', text:'text4'}
  ]

  useEffect(() => {
    setTodos(propTodos)
  })

  return (
    <div>
      {
        todos.map(todo => (
          <TodoInList todo={todo}/>
        ))  
      }
    </div>
    
  )
    
}

export default todoList