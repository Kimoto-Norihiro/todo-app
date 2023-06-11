import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react'

type AuthContext = {
  authToken: string
  login: (token: string) => Promise<void>
  logout: () => Promise<void>
}

const Context = createContext<AuthContext>({
  authToken: '',
  login: async () => {},
  logout: async () => {},
})

type Props = { children: ReactNode }
export const AuthProvider = ({children}: Props) => {
  const [authToken, setAuthToken] = useState('')

  const login = async (token: string) => {
    localStorage.setItem('token', token)
    setAuthToken(token)
    console.log('login', token)
  }
  const logout = async () => {
    localStorage.setItem('token', '')
    setAuthToken('')
  }

  useEffect(() => {
    setAuthToken(localStorage.getItem('token') || '')
  },[])

  return (
    <Context.Provider value={{authToken, login, logout}}>
      {children}
    </Context.Provider>
  )
}

export const useAuth = () => useContext(Context)