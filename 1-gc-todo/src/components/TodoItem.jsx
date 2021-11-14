import React from 'react';
import {
    Button,
    FormControlLabel,
    Switch,
    Typography
} from '@mui/material';
import { Box } from '@mui/system';

// A TodoItem functional component that renders a single todo item.
// It takes a todo object as a prop and returns a JSX element.
function TodoItem({ todo, onRemove, onToggleComplete, onEdit }) {
    return (
        <Box width="100%" display="flex">
            <Box flex={1}>
                <Typography variant="h6">{todo.title}</Typography>
                <Typography variant="caption">{todo.description}</Typography>
            </Box>
            <Box display="flex">
                <Button color="error" onClick={() => onRemove(todo.id)}>Remove</Button>
                <Button onClick={() => onEdit(todo.id)}>Edit</Button>
            </Box>
            <FormControlLabel
                label="Done"
                checked={todo.completed}
                onChange={e => onToggleComplete(todo.id, e.target.checked)}
                control={<Switch />}
            />
        </Box>
    );
}

export default TodoItem;