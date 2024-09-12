import "./TodoList.css"
import { useGlobalState } from "../../GlobalStateProvider";
import { Checkbox, IconButton, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AddTodoForm from "../../components/AddTodoForm/AddTodoForm";

function TodoList() {
    const { state, setGlobalState } = useGlobalState();
    const { todos } = state;

    // Remove todos by filering the array
    const removeTodo = (id: string) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id)
        setGlobalState({ todos: filteredTodos });
    }

    // Complete by mapping todos and returning the modified one that matches the id
    const completeTodo = (id: string) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isDone: !todo.isDone
                }
            }
            return todo;
        });
        setGlobalState({ todos: updatedTodos })
    }
    const editTodo = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        // Use index instead of id
        // Looping through the entire array for each keystroke would be inefficient
        const updatedTodos = [...todos]
        updatedTodos[index].content = event.target.value;
        setGlobalState({ todos: updatedTodos });
    }

    return (
        <div className="todo-page">
            <AddTodoForm />
            <div className="todos">
                <p className="mt-4 mb-0">My todos</p>
                {/* Display todos */}
                {todos?.map((todo, index) => {
                    return <div className={`todo text-decoration-${todo.isDone ? "line-through" : "none"} d-flex align-items-center text-wrap text-break mt-3`} key={todo.id} >
                        {/* Give each input a unique id for HTML semantics */}
                        <Checkbox id={`todo-isdone-${index}`} checked={todo.isDone} onChange={() => { completeTodo(todo.id) }} />
                        <TextField
                            id={`todo-content-${index}`}
                            variant="standard"
                            fullWidth
                            value={todo.content}
                            onChange={(event) => {
                                editTodo(event, index)
                            }}
                        />
                        <IconButton className="ms-4 me-2" onClick={() => { removeTodo(todo.id) }}><CloseIcon /></IconButton>
                    </div>
                })}
            </div>
        </div>
    )
}
export default TodoList
