export type User = {
  id: number
  name: string
  email: string
  password: string
  created_at: Date
  updated_at: Date
  todos: Todo[]
}

export type Todo = {
  id: number
  title: string
  body?: string
  user_id: number
  created_at: Date
  updated_at: Date
  tags: Tag[]
}

export type Tag = {
  id: number
  name: string
  created_at: Date
  updated_at: Date
  user_id: number
}

export type TodoTag = {
  id: number
  todo_id: number
  tag_id: number
  created_at: Date
  updated_at: Date
}