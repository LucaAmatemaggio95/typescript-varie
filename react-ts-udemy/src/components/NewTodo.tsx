import React, {useRef} from "react";
import { useEffect } from "react";
import './NewTodo.css';

interface Props {
    todoAdd: (text: string) => void
}

const NewTodo:React.FC<Props> = (props) => {

    const textInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        const value = textInputRef.current!.value;

        props.todoAdd(value);

    }

    useEffect(() => {

    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>todo text</label>
                <input ref={textInputRef} type="text" id="todo-text" />
            </div>
            <button type="submit">submit</button>
        </form>
    )
}

export default NewTodo