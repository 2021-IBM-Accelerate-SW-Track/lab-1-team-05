import './App.css';
import { useState } from 'react';
import TodoForm from './component/TodoForm.js';
import Item from './component/Item.js';

function App() {

  // Employ React hook to keep track of all to-do list items
  let [items, setItems] = useState([]);

  /* Updates list when a new task is submitted */
  const addItem = (task) => {
    let flag = false;
    for(let i = 0; i<items.length; i++){
      if(items[i].text === task.text){
        flag = true;
        break;
      }
    }
    if(!flag){
      const temp = [...items, task];
      setItems(temp);
    }
  }

  const deleteHandler = (id) => {
    const result = items.filter(item=> id !== item.id);
    setItems(result);
 };


  return (
    <div className="App">
      <h1 className="header">TO-DO LIST</h1>
      <TodoForm onSubmit={addItem} />
      {items.map((t, i) => <Item key={i} task={t} onDelete = {deleteHandler} />)}
      
    </div>
  );

}

export default App;
