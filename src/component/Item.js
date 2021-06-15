import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

// A single to-do item
export default function Item(props) {

    // Recommendation to change "Edit" and "Delete" to respective icons later
    return (
        <div className="todo-item">
            <Checkbox checked={props.task.done} />
            <p>{props.task.text}</p>
            <Button>Edit</Button>
            <Button>Delete</Button>
        </div>
    );

}