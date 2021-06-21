import {useState, useRef, useEffect} from 'react';
import { Dialog, DialogContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        paddingRight: '0px'
    }
}))

// An edit form for creating a new task, to be added to the list
export default function EditForm(props) {

    const [val, setVal] = useState(props.item.text);
    const inputRef = useRef(null);

    const [message, setMessage] = useState("");

    /* Updates the UI text as a user types */
    const handleTextChange = (e) => {
        e.preventDefault();
        setVal(e.target.value);
    }

    /* Validates and saves user text input and closes the popup */
    const handleUpdateButton = (e) => {
        e.preventDefault();
        if (!val) {
            props.setOpenPopup(false);
            return;
        }

        if (val.match("^\\s+$")) {
            setMessage("Item must contain text.");
            return;
        }

        const updated = {
            id: props.item.id,
            text: val,
            done: props.item.done,
            created: props.item.created
        }

        props.setOpenPopup(false);
        props.onUpdate(updated);
    }

    /* Closes the popup without saving changes */
    const handleCancelButton = (e) => {
        e.preventDefault();
        props.setOpenPopup(false);
    }
    
    return (
        <Dialog open={props.openPopup}>
            <DialogContent>
                <form>
                    <input
                        value={val}
                        defaultValue={props.item.text}
                        onChange={handleTextChange}
                        name="todo-edit"
                        ref={inputRef.current}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        mt={3}
                        onClick={handleUpdateButton}
                    >
                        UPDATE
                    </Button>
                    <Button 
                        color="secondary"
                        onClick={handleCancelButton}
                    >
                        CANCEL
                    </Button>
                </form>
                <p>{message}</p>
            </DialogContent>
        </Dialog>
    );
    
}