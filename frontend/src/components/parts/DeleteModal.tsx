import React, { useState } from "react";
import { useCommonModal } from "../../contexts/modal-context";
import { useRouter } from "next/router";

type Props = {
	message: string
	deleteAction: () => void
}

export const DeleteModal = ({message, deleteAction}: Props) => {
  const { closeModal } = useCommonModal()
  const router = useRouter()

  return (
    <div className="bg-white p-10 rounded-lg">
      <p>{message}</p>
      <div className='flex justify-between items-center p-2'>
        <div onClick={() => {
          deleteAction()
          closeModal()
          router.reload()
        }}>
          yes
        </div>
        <div onClick={() => closeModal()}>
          cancel
        </div>
      </div>
    </div>
  )
}