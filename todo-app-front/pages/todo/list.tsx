import React from 'react'
import todoList from '../../compornents/templates/todo/TodoList'

export default todoList

export const getStaticProps = async () => {
	const res = await fetch('http://localhost:8000/todo')
	const todos = await res.json()

	return { props: {todos:todos}}
}