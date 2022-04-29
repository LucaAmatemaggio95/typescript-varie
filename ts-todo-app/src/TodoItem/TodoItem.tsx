import { DeleteTwoTone, DoneOutlineTwoTone, ModeEditOutlineTwoTone } from '@mui/icons-material'
import { IconButton, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { Todo } from '../models/models'

type Props = {

  todo: Todo,
  list: Todo[],
  setList: React.Dispatch<React.SetStateAction<Todo[]>>

}

const TodoItem:React.FC<Props> = ({ todo, list, setList }) => {

  const handleDone = (id: number) => {
    
    setList(list.map(i => i.id === id 
      ? {...i, isDone: !todo.isDone}
      : i
    ));

  }

  const handleDelete = (id: number) => {

    setList(list.filter(i => i.id !== id));

  }

  return (
    <ListItem divider>
        <ListItemText primary={todo.todo} primaryTypographyProps={{color: todo.isDone ? '#e5e5e5' : 'inherit'}} />
        <ListItemIcon>
          <IconButton onClick={() => handleDone(todo.id)}>
            <DoneOutlineTwoTone />
          </IconButton>
        </ListItemIcon>
        <ListItemIcon>
          <IconButton onClick={() => handleDelete(todo.id)}>
            <DeleteTwoTone />
          </IconButton>
        </ListItemIcon>
    </ListItem>
  )
}

export default TodoItem