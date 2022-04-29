import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { Todo } from "./models/Todos";

const App:React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {

    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), title: text}]);

  }

  const deleteHandler = (id: string) => {
    setTodos(prev => {
      return prev.filter(i => i.id !== id)
    })
  }

  return (
    <div className="App">
      <NewTodo todoAdd={todoAddHandler} />
      <TodoList items={todos} todoDelete={deleteHandler} />
    </div>
  );
}

export default App;
