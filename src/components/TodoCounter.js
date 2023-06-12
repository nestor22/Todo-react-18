import React from "react";

export const TodoCounter = ({ total, completed }) => {
  let totalOfTasks = (completed / total) * 100;

  return (
    <div className="flex justify-center items-center gap-2 py-3">
      <img src="./computer.png" alt="computer" className="h-8 w-8" />
      <div>
        <div className="flex gap-1 text-gray-500 font-semibold md:w-96">
          {completed} / {total} Tareas completadas
        </div>
        <div className="w-full bg-gray-200 h-1 md:w-96">
          <div
            className="bg-green-500 h-1 rounded"
            style={{ width: `${totalOfTasks}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
