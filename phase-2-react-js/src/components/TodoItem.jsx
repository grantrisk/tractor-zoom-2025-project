import { useState } from "react";
// AI-generated comment:
// This is a functional component representing a single todo item.
// It receives `task` (an object containing id, text, and isCompleted) and `onTaskCompleted` (a function) as props.
export const TodoItem = ({ task, onTaskCompleted }) => {
    const completed = task.isCompleted;

    return (
        // AI-generated comment:
        // The `key` prop is crucial when rendering lists in React. While currently placed here,
        // it is generally best practice to place the `key` on the component being rendered
        // *within the `map` call in the parent component (`TodoList.jsx` in this case)*.
        // The `key` helps React identify which items have changed, are added, or are removed,
        // improving performance and preventing issues with component state when the list changes.
        <li
            key={task.id}
            // AI-generated comment:
            // This demonstrates conditional rendering using an inline style object.
            // Based on the `completed` status, the text will either be line-through and gray, or normal and black.
            style={{
                textDecoration: completed ? "line-through" : "none",
                color: completed ? "#888" : "#000",
            }}
        >
            {/* AI-generated comment:
                `checked={completed}` makes this a controlled checkbox, meaning its checked state
                is dictated by the `completed` state variable.
                `onChange` is an event handler that fires when the checkbox's value changes.
                It calls the `onTaskCompleted` function (passed as a prop from `TodoList`),
                passing the `task.id` to identify which task to toggle.
            */}
            <input type="checkbox" checked={completed} onChange={() => onTaskCompleted(task.id)} />
            {task.text}
        </li>
    );
};
