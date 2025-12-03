import { useState } from "react";
import { TodoItem } from "./TodoItem";
import { TodoForm } from "./TodoForm";
import { Todo } from "../types/Todo";

const initialTasks: Todo[] = [
    { id: 1, text: "Buy groceries", isCompleted: false },
    { id: 2, text: "Finish React project", isCompleted: false },
    { id: 3, text: "Walk the dog", isCompleted: true },
];
export const TodoList = () => {
    // AI-generated comment:
    // `useState` is used here to manage the list of todo tasks. `tasks` is the current state
    // (an array of todo objects), and `setTasks` is the function to update this state.
    // React will re-render this component and its children whenever `setTasks` is called with a new value.
    const [tasks, setTasks] = useState(initialTasks);

    // AI-generated comment:
    // This handler function is responsible for adding a new task to the list.
    const addTaskHandler = (task) => {
        // AI-generated comment:
        // Use the functional update form of `setTasks`. This is important when the new state
        // depends on the previous state, as it guarantees you're working with the most
        // up-to-date `prevTasks` value, preventing stale closures.
        // `prevTasks` is the value of the 'tasks' state variable *before* this update is applied.
        // It ensures you are working with the most current state when calculating the new state.
        // The spread operator ([...prevTasks]) copies all the existing tasks into a new array,
        // and 'task' is then appended to that new array. This is necessary because state
        // updates must be immutable (you must return a new array/object, not modify the old one).
        // Modifying state directly (e.g., `tasks.push(task)`) would not trigger a re-render
        // and could lead to unpredictable behavior.
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    /* <===== Incorrect implementation of this ===>
    const toggleCompletedTask = (taskId) => {
        tasks.map((task) => {
            if (task.id == taskId) setTasks((prevTasks) => [...prevTasks, {...task, isCompleted: !task.isCompleted}]);
        });
    }; */

    // AI-generated comment:
    // This function demonstrates the "Lifting State Up" pattern. Instead of each `TodoItem` managing
    // its own completion state, the `TodoList` (the common ancestor) manages the `tasks` array.
    // `toggleCompletedTask` is passed down as a prop to `TodoItem`, allowing the child to
    // request a state change that is then handled by the parent. This centralizes state logic.
    const toggleCompletedTask = (taskId) => {
        setTasks((prevTasks) =>
            // 1. Map over all previous tasks
            prevTasks.map((task) => {
                // 2. Check for the task to be toggled
                if (task.id === taskId) {
                    // 3. Return a brand new task object with isCompleted flipped
                    //    (Ensures immutability by copying existing task properties)

                    // AI-generated comment:
                    // In React, state should never be modified directly (in place). Instead, when
                    // you want to update an array or object in state, you must create a brand-new
                    // copy of that array or object with the changes applied. This is called immutability.
                    // Why it Matters: React relies on detecting a change in the reference (memory address)
                    // of the state variable to know when it needs to re-render the components. If you
                    // directly change a property inside the existing task object, the reference remains
                    // the same, and React might not recognize that the state has changed, leading to bugs
                    // where the UI doesn't update.
                    return { ...task, isCompleted: !task.isCompleted };
                }
                // 4. Return all other tasks unchanged
                return task;
            })
        );
    };

    return (
        <>
            <TodoForm onAddTask={addTaskHandler} />
            <h3>TODO List:</h3>
            {/* AI-generated comment:
                When rendering a list of components (like `TodoItem`s) using `map`,
                each item needs a unique `key` prop. The `key` helps React efficiently
                update the list by identifying which items have changed, are added, or are removed.
                Without a stable `key`, React might re-render too much or in an unpredictable order,
                leading to performance issues or bugs, especially if list items can be reordered or deleted.
                `task.id` is a good choice for a key because it's unique and stable for each task.
            */}
            {tasks.map((task) => (
                <TodoItem key={task.id} task={task} onTaskCompleted={toggleCompletedTask} />
            ))}
        </>
    );
};
