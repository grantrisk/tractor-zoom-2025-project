import { useTodos } from "@/context/TodoContext";
import type { Todo } from "../types/Todo";

type TodoItemParam = {
    task: Todo;
};

export const TodoItem = ({ task }: TodoItemParam) => {
    const { dispatch } = useTodos();
    const completed = task.isCompleted;

    return (
        <li
            key={task.id}
            style={{
                textDecoration: completed ? "line-through" : "none",
                color: completed ? "#888" : "#000",
            }}
        >
            <input
                type="checkbox"
                checked={completed}
                onChange={() => dispatch({ type: "TOGGLED", payload: task.id })}
            />
            <span style={{ margin: "0 10px" }}>{task.text}</span>
            <button
                onClick={() => dispatch({ type: "DELETED", payload: task.id })}
                style={{
                    marginLeft: "auto",
                    color: "red",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                }}
            >
                Delete
            </button>
        </li>
    );
};
