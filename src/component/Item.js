import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// A single to-do item
export default function Item(props) {
    // const handleChange = (event) => {
    //     setState({ ...state, [event.target.name]: event.target.checked });
    //   };

    // Recommendation to change "Edit" and "Delete" to respective icons later
    return (
        <div className="todo-item">
            {/* <FormControlLabel control={<Checkbox checked={props.task.done}/>} /> */}
            <FormControlLabel control={<Checkbox value="checkedC" />} />
            <div class="output">
            {props.task.text}
            </div>           
            <Button>Edit</Button>
            <Button>Delete</Button>
        </div>
    );

}