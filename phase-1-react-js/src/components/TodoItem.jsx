import { useState } from "react";
export const TodoItem = ({ task, onTaskCompleted }) => {
    const completed = task.isCompleted;

    return (
        <li
            key={task.id}
            style={{
                textDecoration: completed ? "line-through" : "none",
                color: completed ? "#888" : "#000",
            }}
        >
            <input type="checkbox" checked={completed} onChange={() => onTaskCompleted(task.id)} />
            {task.text} | {task.id} | {String(completed)}
        </li>
    );
};
