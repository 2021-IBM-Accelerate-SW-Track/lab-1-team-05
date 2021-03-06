import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import MuiButton from '@material-ui/core/Button';

// An edit form for creating a new task, to be added to the list
export default function TodoForm(props) {

    const [val, setVal] = useState("");
    const [message, setMessage] = useState("");
    const Button = styled(MuiButton)(spacing);

    /* Updates the UI text as a user types */
    const handleTextChange = (e) => {
        e.preventDefault();
        if (e.target.value.length > 70) {
            return;
        } else if (e.target.value.length === 70) {
            setMessage("Maximum character limit reached.")
        } else {
            setMessage("");
        }
        setVal(e.target.value);
    }
    
    /* validates and saves user text input and clears the field */
    const handleSubmitButton = (e) => {
        e.preventDefault();

        if (val.match("^\\s+$")) {
            setMessage(`No "empty" text allowed.`);
            return;
        }

        const newTask = {
            id: new Date().getTime(), // ensures unique ID
            text: val,
            done: false,
            created: getFormattedDate(),
        }

        if (props.onSubmit(newTask)) {
            setVal("");
            setMessage("");
        } else {
            setMessage("Duplicate task detected (case-insensitive). Try again.");
        }
    }

    /* Gives current date and time formatted as MM/DD/YYYY, 00:00:00 */
    const getFormattedDate = () => {
        let d = new Date();
        
        return ('0' + (d.getMonth() + 1)).slice(-2) + "/" + d.getDate() + "/" + d.getFullYear() + ", " 
            + " " +  d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    }

    return (
        <form onSubmit={handleSubmitButton}>
            <TextField data-testid="new-item-input"
                required
                style={{ margin: 15 }}
                placeholder="create a new task" 
                onChange={handleTextChange}
                name="todo-input"
                value={val}
                variant="outlined"
                color="secondary"
                ng-trim="false"
            />
            <Button data-testid="new-item-button"
                variant="contained"
                color="primary"
                disableElevation
                type="submit"
                mt={3}
            >
                + ADD ITEM
            </Button>
            <p className="error-message">{message}</p>
            <br/>
        </form>
    );
    
}