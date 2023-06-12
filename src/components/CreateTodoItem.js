import React from "react";

export const CreateTodoItem = () => {
  const handleClick = ()=>{
    console.log('le di click')
  } 
  return (
    <button className="self-end text-yellow-500 font-bold hover:rounded hover:border-amber-500 hover:border-2 p-1.5"
      onClick={handleClick}
    >
      + Add new task
    </button>
  );
};
