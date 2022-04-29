import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = { 
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
 }

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC = (props) => {

    const [todos, setTodos] = useState<Todo[]>([]);
  
    // [
    //   new Todo('React'),
    //   new Todo('Typescript')
    // ];

    const addTodoHandler = (text: string) => {

        const newTodo = new Todo(text);

        setTodos([...todos, newTodo]);

    }

    const removeTodoHandler = (todoID: string) => {

        const newList = [...todos].filter(item => item.id !== todoID);

        setTodos(newList);

    }

    const contextValue: TodosContextObj  = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }

    return  <TodosContext.Provider 
                value={contextValue}
            >
                {props.children}
            </TodosContext.Provider>
}

export default TodosContextProvider