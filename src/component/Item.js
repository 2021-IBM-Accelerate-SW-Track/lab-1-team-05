import {useState} from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) =>({
    root: {
      width: 600,
      height: 125,
      marginBottom: '1rem',
    },
    title: {
      fontSize: 14,
    },
    content: {
        flex: '1 0 auto',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
  }));

// A single to-do item
export default function Item(props) {
    let [checked, setChecked] = useState(false);
    const classes = useStyles();
 
    /* Checkbox click handler */
    const handleCheckChange = (e) => {
        setChecked(e.target.checked);
        let mapped = props.listItems.map(item => {
            return item.id === props.task.id ? { ...item, done: !item.done } : { ...item};
        });
        props.onUpdate(mapped);

    };

    /* Delete button click handler */
    const handleDeleteButton = (e) => {
        e.preventDefault();
        props.onDelete(props.task.id);
    }

    /* Edit button click handler */
    const handleEditButton = (e) => {
        e.preventDefault();
        props.onEdit(props.task);
    }

    // Recommendation to change "Edit" and "Delete" to respective icons later
    return (
        <div className="todo-item">
            <Card className={classes.root} variant="outlined">
                <CardContent className={classes.content}>
                    <Checkbox
                        className="checkBox_item"
                        checked={checked}
                        onChange={handleCheckChange}
                    />
                    <span>{props.task.text}</span>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="outlined" color="primary" onClick={handleEditButton}>Edit</Button>
                    <Button size="small" variant="outlined" color="secondary" onClick={handleDeleteButton}>Delete</Button>
                    <Box>Created: {props.task.created}</Box>
                </CardActions>
            </Card>
        </div>
    );

}