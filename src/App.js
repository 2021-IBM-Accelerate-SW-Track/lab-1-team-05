import './App.css';
import { useState } from 'react';
import TodoForm from './component/TodoForm.js';
import Item from './component/Item.js';

function App() {

  // Employ React hook to keep track of all to-do list items
  let [items, setItems] = useState([]);

  /* Updates list when a new task is submitted */
  const addItem = (task) => {
    const temp = [...items, task];
    setItems(temp);
  }

  return (
    <div className="App">
      <TodoForm onSubmit={addItem} />
      <h1>TO-DO LIST</h1>
      {items.map((t, i) => <Item key={i} task={t} />)} 
    </div>
  );

}

export default App;