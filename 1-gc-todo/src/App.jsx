import { Button, Typography, Divider } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react'
import TodoFormDialog from './components/TodoFormDialog';
import TodoItem from './components/TodoItem';


// An ID generator function that generates unique IDs
function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

function App() {
  // A Todo list state
  const [todos, setTodos] = useState([]);

  // A state to open/close dialog
  const [open, setOpen] = useState(false);


  // A state to hold the form values
  const [values, setValues] = useState({});


  // A function to handle the todo submit
  const handleSubmit = (values) => {
    // validate the values
    if (!values.title) {
      alert('Title is required');
      return;
    }
    // if the id is empty, it means this is a new todo
    if (!values.id) {
      // Add a new todo to the list
      setTodos([
        ...todos,
        {
          id: generateId(),
          ...values,
        },
      ]);
    } else {
      // Otherwise, find the todo with the same ID and update it
      const updatedTodos = todos.map((todo) => {
        if (todo.id === values.id) {
          return {
            ...todo,
            ...values
          };
        }
        return todo;
      });
      setTodos(updatedTodos);
    }
    // Clear the form
    setValues({});
    // Close the dialog
    setOpen(false);
  };


  // Close dialog and clear the form
  const handleClose = () => {
    setOpen(false);
    setValues({});
  };


  // Edit a todo
  const handleEdit = (todo) => {
    setValues(todo);
    setOpen(true);
  };


  return (
    <Box width={500} mx="auto">
      <Box py={4} zIndex={1} position='sticky' top={0} bgcolor="white" width="100%" justifyContent="space-between" display="flex" alignItems="center">
        <Typography variant="h4" gutterBottom>TODOS - {todos.length}</Typography>
        <Button variant="contained" onClick={() => setOpen(true)}>Add Todo</Button>
      </Box>


      <Box width="100%">
        {todos.map((todo) => (
          <Box borderBottom="1px solid #ddd" py={1} key={todo.id}>
            <TodoItem
              todo={todo}
              onRemove={() => setTodos(todos.filter((t) => t.id !== todo.id))}
              onEdit={() => handleEdit(todo)}
              onToggleComplete={(_, completed) => setTodos(todos.map((t) => (t.id === todo.id ? { ...t, completed } : t)))}
            />
          </Box>
        ))}

      </Box>
      <TodoFormDialog
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
        initialValues={values}
      />
    </Box>
  )
}

export default App