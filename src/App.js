import './App.css';
import { useState } from 'react';
import TodoForm from './component/TodoForm.js';
import Item from './component/Item.js';
import EditForm from './component/EditForm.js';

function App() {

  const [items, setItems] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [popupText, setPopupText] = useState("");

  /* Updates list when a new task is submitted */
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

  /* Updates list */
  const updateList = (list) => {
    setItems(list);
  }

  /* Shows the dialog popup box for the edit form */
  const showPopup = (text) => {
    setOpenPopup(true);
    setPopupText(text);
  }

  return (
    <div className="App">
      <h1 className="header">TO-DO LIST</h1>
      <TodoForm onSubmit={addItem} />
      {items.map((t, i) => <Item key={i} task={t} listItems={items} onUpdate={updateList} onDelete={deleteItem} onEdit={showPopup}/>)}
      {console.log(popupText)}
      <EditForm openPopup={openPopup} setOpenPopup={setOpenPopup} item={popupText}/>
    </div>
  );

}

export default App;