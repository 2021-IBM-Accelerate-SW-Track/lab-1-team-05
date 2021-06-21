import { Modal } from "@material-ui/core";
import { React } from "react";
import {useState} from 'react';

export default function SimpleModal(holder)  {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");


    const handleOpen = () => {
        setOpen(true);
    };


    /* "Saves" user text input and clears the field This is from TodoForm.js*/
    const handleDoneButton = (e) => {
        e.preventDefault();

        // VALIDATE USER TEXT HERE (recommend case-insensitive)

        const newTask = {
            id: new Date().getTime(), // ensures unique ID
            text: text,
            done: false,
            edited: getFormattedDate(),
        }
        holder.handleDoneButton(newTask);
        setOpen(false);
        setText("");
    }

    /* Gives current date and time formatted as MM/DD/YYYY, 00:00:00 */
    const getFormattedDate = () => {
        let d = new Date();
        
        return ('0' + (d.getMonth() + 1)).slice(-2) + "/" + d.getDate() + "/" + d.getFullYear() + ", " 
            + " " +  d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    }

    const body = (
        <div>
            <h2 id ="modal-title"> Edit </h2>
            <p id ="modal-description">
                <textarea id="modal-textbox" name="textbox" rows ="4" cols="50" autoFocus>
                    {text}
                </textarea>
            </p>
            <SimpleModal />
        </div>


    );

    return (
        <body>
            <button type = "button" onClick={handleOpen}>
                Edit
                </button>
                <Modal
                open={open}
                onClose={handleDoneButton}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                >
                    {body}
                </Modal>
        </body>
    );
}