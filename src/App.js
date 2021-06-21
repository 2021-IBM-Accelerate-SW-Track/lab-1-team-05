import './App.css';
import { useState } from 'react';
import TodoForm from './component/TodoForm.js';
import Item from './component/Item.js';
import EditForm from './component/EditForm.js';

function App() {

  const [items, setItems] = useState([]); // list of all task items
  const [openPopup, setOpenPopup] = useState(false); // for showing edit form popup
  const [focus, setFocus] = useState({}); // denotes specific item to focus on for edit form

  /* Validates duplicates and updates list when a new task is submitted */
  const addItem = (task) => {
    let flag = false;
    let lowercase = task.text.toLowerCase();

    for (let i = 0; i < items.length; i++) {
      if (items[i].text.toLowerCase() === lowercase) {
        flag = true;
        break;
      }
    }

    if (!flag) {
      const temp = [...items, task];
      setItems(temp);
    }
  }

  /* Deletes a specific task item from the list */
  const deleteItem = (id) => {
    let temp = items.filter((task) => task.id !== id);
    setItems(temp);
  }

  /* Updates items list, given a new list */
  const updateList = (list) => {
    setItems(list);
  }

  /* Updates list when an existing task is edited */
  const editItem = (task) => {
    const idx = items.findIndex((t) => t.id === task.id);
    let temp = [...items];
    temp[idx].text = task.text;
    setItems(temp);
  }

  /* Shows the dialog popup box for the edit form */
  const showPopup = (task) => {
    setOpenPopup(true);
    setFocus({
      id: task.id,
      text: task.text,
    });
  }

  return (
    <div className="App">
      <h1 className="header">TO-DO LIST</h1>
      <TodoForm onSubmit={addItem} />
      {items.map((t, i) => <Item key={i} task={t} listItems={items} onUpdate={updateList} onDelete={deleteItem} onEdit={showPopup}/>)}
      <EditForm openPopup={openPopup} setOpenPopup={setOpenPopup} item={focus} onUpdate={editItem}/>
    </div>
  );

}

export default App;