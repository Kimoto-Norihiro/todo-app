import React, { createContext, ReactNode, useContext, useState } from 'react'

type ModalContext = {
  showModal: (modal: ReactNode) => void
  closeModal: () => void
}
const Context = createContext<ModalContext>({
  showModal: () => {},
  closeModal: () => {},
})

type Props = { children: ReactNode }
export const ModalProvider = ({ children }: Props) => {
  const [modal, setModal] = useState<ReactNode>()

  const showModal = (modal: ReactNode) => {
    setModal(modal)
  }
  const closeModal = () => {
    setModal(undefined)
  }

  return (
    <Context.Provider value={{ showModal, closeModal }}>
      {children}
      {modal && (
        <div className='absolute top-0 left-0'>
          <div onClick={closeModal}>
            <div className='h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center'>
              <div
                onClick={(e) => {
                  e.stopPropagation()
                }}
              >
                {modal}
              </div>
            </div>
          </div>
        </div>
      )}
    </Context.Provider>
  )
}

export const useCommonModal = () => useContext(Context)
