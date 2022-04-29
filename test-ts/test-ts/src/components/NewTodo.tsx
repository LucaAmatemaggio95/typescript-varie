import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";

import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {

    const todosCtx = useContext(TodosContext);

    const todoRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {

        event.preventDefault();

        const enteredText = todoRef.current!.value;

        if (enteredText.trim().length === 0) {
            return;
        }

        todosCtx.addTodo(enteredText);

    }

    return <form onSubmit={submitHandler} className={classes.form}>
                <label htmlFor="text">Todo text</label>
                <input type={'text'} id="text" ref={todoRef} />
                <button>Add todo</button>
            </form>

}

export default NewTodo;