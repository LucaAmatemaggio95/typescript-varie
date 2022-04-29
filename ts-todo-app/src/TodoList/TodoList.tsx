import { List } from '@mui/material'
import React from 'react'
import { Todo } from '../models/models'
import TodoItem from '../TodoItem/TodoItem'

interface Props {
    list: Todo[],
    setList: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList:React.FC<Props> = ({list, setList}) => {
  return (
    <List>
        {list.map(i => (
            <TodoItem 
                list={list}
                key={i.id}
                setList={setList}
                todo={i}
            />
        ))}

    </List>
  )
}

export default TodoList