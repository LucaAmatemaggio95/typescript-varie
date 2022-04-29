import { SendTwoTone } from '@mui/icons-material'
import { Box, IconButton, TextField } from '@mui/material'
import React from 'react'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: () => void
}

const InputField:React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {

  return (
      <Box mt={3}>
        <form>
            <TextField 
                label="Enter a task"
                id="input-task"
                variant="outlined"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                fullWidth
                InputProps={
                    {
                        endAdornment: <IconButton color="primary" onClick={handleAdd}><SendTwoTone /></IconButton>
                    }
                }
            />
        </form>
    </Box>
  )
}

export default InputField