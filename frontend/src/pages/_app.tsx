import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ModalProvider } from '../contexts/modal-context'
import { AuthProvider } from '../contexts/auth-context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </AuthProvider>
  )
}
