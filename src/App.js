import logo from "./platzi.webp";
import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { CreateTodoItem } from "./components/CreateTodoItem";
import { TitleSeccion } from "./components/TitleSeccion";
import { useState } from "react";

const defaultTodos = [
  { text: "cortar la cebolla", completed: false },
  { text: "cortar la cebolla", completed: false },
  { text: "cortar la cebolla", completed: false },
  { text: "cortar la cebolla", completed: false },
]; 

localStorage.setItem('TODOS', JSON.stringify(defaultTodos));

function App() {
  let parsedTodos = localStorage.getItem('TODOS');


  const [searchValue, setSearchValue] = useState("");
  const [todos, setTodos] = useState([]);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );
  const showedTodos = searchValue.length > 0 ? searchedTodos : todos;

  const completeTodo = (todoIndex, completed) => {
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !completed;
    setTodos(newTodos);
  };
  const deleteTodo = (todoIndex) => {
    const newTodos = [...todos];
    delete newTodos[todoIndex];
    setTodos(newTodos);
  };
  return (
    <div className="bg-gray-900 text-gray-200 flex justify-start items-center flex-col xs:p-16 h-[100vh] w-[100vw]">
      <TitleSeccion />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoCounter completed={completedTodos} total={todos.length} />
      <TodoList>
        {showedTodos.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              index = {index}
              text={todo.text}
              completed={todo.completed}
              onComplete={completeTodo}
              onDeleted={deleteTodo}
            />
          );
        })}
      </TodoList>
      <CreateTodoItem />
    </div>
  );
}

export default App;
