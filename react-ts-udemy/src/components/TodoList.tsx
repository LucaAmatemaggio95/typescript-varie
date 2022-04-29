import { Todo } from "../models/Todos";
import './TodoList.css';

interface Props {
    items: Todo[],
    todoDelete: (id: string) => void
}

const TodoList:React.FC<Props> = props => {

    return (

        <ul>
            {props.items.map(item => (
                <li key={item.id}>
                    <span>{item.title}</span>
                    <button onClick={props.todoDelete.bind(null, item.id)}>DELETE</button>
                </li>
            ))}
        </ul>

    )

}

export default TodoList;