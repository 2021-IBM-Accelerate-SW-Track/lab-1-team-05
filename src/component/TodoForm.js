import {useState} from 'react';
import { Button } from '@material-ui/core';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';

// An edit form for creating a new task, to be added to the list
export default function TodoForm(props) {

    let [val, setVal] = useState("");

    /* Updates the UI text as a user types */
    const handleTextChange = (e) => {
        // Best practice for handling events, stops any default actions from occurring in browser
        e.preventDefault();
        setVal(e.target.value);
    }
    
    /* "Saves" user text input and clears the field */
    const handleSubmitButton = (e) => {
        e.preventDefault();

        // VALIDATE USER TEXT HERE (recommend case-insensitive)

        const newTask = {
            id: new Date().getTime(), // ensures unique ID
            text: val,
            done: false,
            created: getFormattedDate(),
        }

        props.onSubmit(newTask);
        setVal("");
    }

    /* Gives current date and time formatted as MM/DD/YYYY, 00:00:00 */
    const getFormattedDate = () => {
        let d = new Date();
        
        return ('0' + (d.getMonth() + 1)).slice(-2) + "/" + d.getDate() + "/" + d.getFullYear() + ", " 
            + " " +  d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    }

    return (
        <form onSubmit={handleSubmitButton}>
            <input type="text" name="todo-input" placeholder="Create a new task." value={val} onChange={handleTextChange} />
                <button type="submit">
                    <Button variant="contained" size="large">
                        <AddCircleOutlineRoundedIcon>
                            {/* <button type="submit"></button> */}
                        </AddCircleOutlineRoundedIcon>
                    </Button>  
                </button>
        </form>
    );
    
}