import "./TodoList.css";
import { useGlobalState } from "../../GlobalStateProvider";
import AddTodoForm from "../../components/AddTodoForm/AddTodoForm";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import DraggableTodo from "../../components/Todo/Todo";

function TodoList() {
  const { state, setGlobalState } = useGlobalState();
  const { todos } = state;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    // If dropped outside the list, do nothing
    if (!destination) {
      return;
    }
    const sourceIndex = source.index;
    const targetIndex = destination.index;
    // Reorder the todos array
    const reordered = [...todos];
    const [removed] = reordered.splice(sourceIndex, 1);
    reordered.splice(targetIndex, 0, removed);

    setGlobalState({todos: reordered});
  };

  return (
    <div className="todo-page">
      <AddTodoForm />
      <p className="mt-4 mb-0 ps-1">My todos</p>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todoList">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="todos"
            >
              {/* Display todos */}
              {todos?.map((todo, index) => {
                return (
                    <DraggableTodo todo={todo} index={index}/>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
export default TodoList;
