import React from "react";

export const TodoCounter = ({ total, completed }) => {
  return <div>{completed} / {total} Tareas completadas</div>;
};
