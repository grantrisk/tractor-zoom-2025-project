import { useState } from "react";
export const TodoItem = ({ task }) => {
    const [completed, setComplete] = useState(task.isCompleted);
    return (
        <li
            key={task.id}
            style={{
                textDecoration: completed ? "line-through" : "none",
                color: completed ? "#888" : "#000",
            }}
        >
            <input type="checkbox" checked={completed} onChange={() => setComplete(!completed)} />
            {task.text}
        </li>
    );
};
