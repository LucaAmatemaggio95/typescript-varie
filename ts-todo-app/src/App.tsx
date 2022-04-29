import React, { useState } from 'react';
import './App.css';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import InputField from './InputField/InputField';
import { Todo } from './models/models';
import TodoList from './TodoList/TodoList';

const App:React.FC = () => {

  const [todo, setTodo] = useState<string>("");

  const [list, setList] = useState<Todo[]>([]);


  const handleAdd = () => {

    if (todo) {

      setList([...list, {id: Date.now(), todo: todo, isDone: false}])
      setTodo("");
    }

  }

  return (
    <div>

      <AppBar>
        <Toolbar>
          <Typography variant="h5">TODO Typescript</Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <Toolbar/>
        <InputField
          todo={todo}
          setTodo={setTodo}
          handleAdd={handleAdd}
        />

        <TodoList 
          list={list}
          setList={setList}
        />

      </Container>

    </div>
  );
}

export default App;