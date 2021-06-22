import './App.css';
import { useState } from 'react';
import TodoForm from './component/TodoForm.js';
import Item from './component/Item.js';

function App() {

  const [items, setItems] = useState([]);

  /**
   * Validates duplicates and updates list when a new task is submitted
   * Returns boolean value to indicate success
   */
  const addItem = (task) => {
    let lowercase = task.text.toLowerCase();

    for (let i = 0; i < items.length; i++) {
      if (items[i].text.toLowerCase() === lowercase) {
        return false;
      }
    }

    const temp = [...items, task];
    setItems(temp);
    return true;
  }

  /* Updates items list, given a new list */
  const updateList = (list) => {
    setItems(list);
  }

  return (
    <div className="app">
      <h1 className="header">TO-DO LIST</h1>
      <TodoForm onSubmit={addItem} />
      {items.map((t, i) => 
        <Item key={i} task={t} listItems={items} update={updateList} />)}
    </div>
  );

}

export default App;