import React from "react";
import { useCommonModal } from "@/hooks/modal-context";

const TodoCard = () => {
  const { showModal } = useCommonModal();

  return (
    <div className="flex rounded-lg p-4 py-2 items-center justify-between border-2 border-gray-500 m-1">
      <div className="flex items-center">
        <input type="checkbox" className="form-checkbox h-3 w-3" />
        <h2 className="text-lg font-bold ml-4">Title</h2>
      </div>
      <div className="flex">
        <div 
          className="text-green-500 hover:text-green-700"
          onClick={() => console.log('hello')}
        >
          edit
        </div>
        <div 
          className="text-red-500 hover:text-red-700 ml-4"
          onClick={() => showModal(<DeleteModal/>)}
        >
          delete
        </div>
      </div>
    </div>
  );
};

export default TodoCard;

const DeleteModal = () => {
  return (
    <div className="bg-white p-5">
      <p>are you really delete it ?</p>
    </div>
  )
}
