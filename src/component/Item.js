import {useState} from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import { findAllInRenderedTree } from 'react-dom/test-utils';


const useStyles = makeStyles((theme) =>({
    root: {
      minWidth: 500,
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
    const [checked, setChecked] = useState(false);
    const classes = useStyles();
    // console.log(checked)
    // console.log(props.task.done)

    
    const handleCheckChange = (e) => {
        setChecked(e.target.checked);
        let mapped = props.listItems.map(item => {
            return item.id === props.task.id ? { ...item, done: !item.done } : { ...item};
        });
        props.updateList(mapped);
    };


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
                    <Button size="small" variant="outlined" color="primary">Edit</Button>
                    <Button onClick={() => props.onDelete(props.task.id)} size="small" variant="outlined" color="secondary">Delete</Button>
                    <Box border={1} p='5px' borderColor="text.primary" borderRadius="borderRadius">Date: {props.task.created}</Box>
                </CardActions>
            </Card>
        </div>
    );

}