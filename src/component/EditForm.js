import {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
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

    const [val, setVal] = useState(props.item);

    /* Updates the UI text as a user types */
    const handleTextChange = (e) => {
        e.preventDefault();
        setVal(e.target.value);
    }

    /* "Saves" user text input and closes the popup */
    const handleUpdateButton = (e) => {
        e.preventDefault();

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
                    <TextField
                        required
                        style={{ margin: 15 }}
                        onChange={handleTextChange}
                        name="todo-input"
                        value={val}
                        variant="outlined"
                        color="primary"
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
            </DialogContent>
        </Dialog>
    );
    
}