import React from 'react';
import TodoList from './TodoList'
import TextInput from './TextInput'
import Title from './Title'
import { Button, SvgIcon } from '@material-ui/core';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import './App.css';

function App() {
  return (
    <div>
      <div class="headlineHtml">
        <Title />
      </div>
      
      <div class="centered">
        <TodoList />
        <TextInput ></TextInput>
        <Button variant="contained" size="large" color="primary">
          <AddCircleOutlineRoundedIcon></AddCircleOutlineRoundedIcon>
        </Button>
      </div>

       
    </div>

  )
}

export default App;

// import AddIcon from '@material-ui/icons/Add';

// style={{
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center"
// }}