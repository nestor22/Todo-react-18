import logo from "./platzi.webp";
import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { CreateTodoItem } from "./components/CreateTodoItem";

const defaultTodos = [
  {text: 'cortar la cebolla', completed: false},
  {text: 'cortar la cebolla', completed: false},
  {text: 'cortar la cebolla', completed: false},
  {text: 'cortar la cebolla', completed: false},
];

function App() {
  return (
    <div className="bg-gray-900 text-gray-200 flex justify-start items-center flex-col sm:p-16 h-[100vh] w-[100vw]">
      <TodoCounter completed={10} total={15} />
      <TodoSearch />
      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>
      <CreateTodoItem/>
    </div>
  );
}



export default App;
