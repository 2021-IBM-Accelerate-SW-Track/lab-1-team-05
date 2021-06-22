import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Dialog, DialogContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 550,
        height: 125,
        marginBottom: "1rem",
        border: "2px solid lavender",
        textAlign: "left",
    },
    content: {
        flex: "1 0 auto",
        display: "flex",
        alignItems: "center",
        paddingLeft: theme.spacing(1),
        borderBottom: "2px solid lavender",
    },
    actions: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(2),
        display: 'flex',
        alignItems: "flex-end",
        justifyContent: "space-between",
    },
    box: {
        paddingBottom: theme.spacing(1),
    },
    updateButton: {
        marginRight: theme.spacing(3),
    }
}));

// A single to-do item and its edit form
export default function Item(props) {

    const [openPopup, setOpenPopup] = useState(false);  // for showing edit form popup
    const [val, setVal] = useState(props.task.text);    // for tracking input text
    const [message, setMessage] = useState("");         // for tracking error messages
    const classes = useStyles();

    /* Checkbox click handler */
    const handleCheckChange = (e) => {
        e.preventDefault();
        const mapped = props.listItems.map((item) => {
            return (item.id === props.task.id) ? { ...item, done: !item.done } : { ...item };
        });
        props.update(mapped);
    };

    /* Delete button click handler */
    const handleDeleteButton = (e) => {
        e.preventDefault();
        const deleted = props.listItems.filter((item) => item.id !== props.task.id);
        props.update(deleted);
    }

    /* Edit button click handler */
    const handleEditButton = (e) => {
        e.preventDefault();
        setOpenPopup(true);
    }

    /* Cancel button click handler */
    const handleCancelButton = (e) => {
        e.preventDefault();
        setOpenPopup(false);
        setMessage("");
        setVal(props.task.text);
    }

    /* Update button click handler */
    const handleUpdateButton = (e) => {
        e.preventDefault();

        if (val === "" || val.match("^\\s+$")) {
            setMessage(`No "empty" text allowed.`);
            return;
        }

        setOpenPopup(false);
        setMessage("");
        const mapped = props.listItems.map((item) => {
            return (item.id === props.task.id) ? { ...item, text: val } : { ...item };
        });
        props.update(mapped);
    }

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

    return (
        <div className="todo-item">
            <Card className={classes.root} variant="outlined">
                <CardContent className={classes.content}>
                    <Checkbox
                        className="checkbox-item"
                        checked={props.task.done}
                        onClick={handleCheckChange}
                    />
                    <span>{props.task.text}</span>
                </CardContent>
                <CardActions className={classes.actions}>
                    <Box className={classes.box}>Created {props.task.created}</Box>
                    <div>
                        <Button size="small" color="primary" onClick={handleEditButton}>EDIT</Button>
                        <Button size="small" color="secondary" onClick={handleDeleteButton}>DELETE</Button>
                    </div>
                </CardActions>
            </Card>
            <Dialog open={openPopup}>
                <DialogContent>
                    <form className="edit-form">
                        <input
                            value={(val !== undefined) ? val : props.task.text}
                            defaultValue={props.task.text}
                            onChange={handleTextChange}
                            name="todo-edit"
                            className="edit-input"
                            minLength="1"
                            maxLength="70"
                            ng-trim="false"
                        />
                        <p className="error-message">{message}</p>
                        <div className="edit-buttons">
                            <Button
                                variant="contained"
                                color="primary"
                                disableElevation
                                type="submit"
                                onClick={handleUpdateButton}
                                className={classes.updateButton}
                            >
                                UPDATE
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={handleCancelButton}
                            >
                                CANCEL
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );

}