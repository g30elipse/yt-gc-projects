import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogContentText,
    Button,
    TextField,
    Switch,
    FormControlLabel
} from '@mui/material';


// create a Material UI todo form dialog
export default function TodoFormDialog({
    open,
    onClose,
    onSubmit,
    initialValues,
}) {

    // A state for values
    const [values, setValues] = React.useState(initialValues);

    // UseEffect to update the state with the initial values
    React.useEffect(() => {
        setValues(initialValues);
    }, [initialValues]);


    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Add a Todo</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To add a new todo, enter a title and description for the todo.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Title"
                    onChange={(e) => setValues({ ...values, title: e.target.value })}
                    fullWidth
                    defaultValue={values.title || ''}
                />
                <TextField
                    margin="dense"
                    id="description"
                    label="Description"
                    onChange={(e) => setValues({ ...values, description: e.target.value })}
                    fullWidth
                    defaultValue={values.description || ''}
                />
                <FormControlLabel
                    label="Done"
                    checked={values.completed || false}
                    onChange={e => setValues({ ...values, completed: e.target.checked })}
                    control={<Switch />}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => onSubmit(values)} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
}