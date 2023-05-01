import React, { ReactElement } from 'react'
import { Header } from '../parts/Header';

type Props = {
  children: ReactElement
}

export const HeaderWithBody = ({children}: Props) => {
  return (
    <div>
      <Header />
      <div className='mx-auto container'>
        { children }
      </div>
    </div>
  )
}