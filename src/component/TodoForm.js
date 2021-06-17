import {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import MuiButton from '@material-ui/core/Button';

// An edit form for creating a new task, to be added to the list
export default function TodoForm(props) {

    const [val, setVal] = useState("");
    const Button = styled(MuiButton)(spacing);

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
            <TextField
                required
                style={{ margin: 15 }}
                placeholder="create a new task" 
                onChange = {handleTextChange}
                name = "todo-input"
                value = {val}
                variant = "outlined"
                color = "primary"
            />
            <Button 
                variant="contained" 
                type = 'submit'
                mt = {3}
            >
            add item
            </Button>
        </form>
    );
    
}