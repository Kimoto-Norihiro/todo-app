import React, { useEffect, useState } from "react";
import { useCommonModal } from "../../contexts/modal-context";
import { Todo } from "../../types/types";
import { useRouter } from 'next/router';
import { DeleteModal } from "./DeleteModal";
import { authAxios } from "@/types/api/axios";
import { useAuth } from '../../contexts/auth-context';

type Props = {
  todo: Todo
}

const TodoCard = ({todo}: Props) => {
  const { showModal } = useCommonModal();
  const router = useRouter()
  const [done, setDone] = useState(false)
  const { authToken } = useAuth()

  const deleteTodo = async () => {
    await authAxios.delete(`/todos/${todo.id}`, { headers: {'Authorization': `Bearer: ${authToken}`} })
  }

  return (
    <div className="flex rounded-lg p-4 py-2 items-center justify-between border-2 border-gray-500 m-1">
      <div className="flex items-center w-1/2">
        <div 
          className={`h-3 w-3 rounded-lg ${done ? 'bg-green-500' : 'border-2 border-black'}`}
          onClick={() => setDone(!done)}
        ></div>
        <h2 className={`text-lg font-bold ml-4 ${done && 'line-through'}`}>{todo.title}</h2>
      </div>
      <div className="flex">
        {
          todo.tags.map((tag,index) => (
            <div key={index} className='px-1 border-2 border-gray-500 rounded-lg color-gray-500 mr-1'>{tag.name}</div>
          ))
        }
      </div>
      <div className="flex">
        {
          done ? (
            <div 
              className="text-red-500 hover:text-red-700 ml-4"
              onClick={() => 
                showModal(
                  <DeleteModal 
                    message="are you really delete it ?"
                    deleteAction={deleteTodo}
                  />
                )
              }
            >
              delete
            </div>
          ) : (
            <div 
              className="text-green-500 hover:text-green-700"
              onClick={() => router.push(`/todo/${todo.id}`)}
            >
              edit
            </div>
          )
        }
      </div>
    </div>
  );
};

export default TodoCard;