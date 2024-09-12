import { useState } from "react";
import { useGlobalState } from "../../GlobalStateProvider";
import { IconButton, TextField } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { v4 as uuidv4 } from 'uuid';

function AddTodoForm() {
    const { state, setGlobalState } = useGlobalState();
    const { todos } = state;
    const [todoInput, setTodoInput] = useState("");

    // Create new todo and push it to global state
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!todoInput) return;
        const newTodo = { id: uuidv4(), content: todoInput, isDone: false }
        setGlobalState({ todos: [...todos, newTodo] })          
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="d-flex align-items-center justify-content-between">
                    <TextField
                        id="todo-input"
                        label="Add todo"
                        fullWidth
                        value={todoInput}
                        onChange={(event) => {
                            setTodoInput(event.target.value);
                        }}
                    />
                    <IconButton type="submit" className="ms-4"><AddCircleOutlineIcon fontSize="large" /></IconButton>
                </div>
            </form>
        </>
    )
}
export default AddTodoForm
