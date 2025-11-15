import { useState } from "react";
import { TodoItem } from "./TodoItem";
import { TodoForm } from "./TodoForm";

const initialTasks = [
    { id: 1, text: "Buy groceries", isCompleted: false },
    { id: 2, text: "Finish React project", isCompleted: false },
    { id: 3, text: "Walk the dog", isCompleted: true },
];
export const TodoList = () => {
    const [tasks, setTasks] = useState(initialTasks);

    const addTaskHandler = (task) => {
        // Use the functional update to get the latest state (prevTasks)
        // prevTasks is the value of the 'tasks' state variable *before* this update is applied.
        // It ensures you are working with the most current state when calculating the new state.
        // The spread operator ([...prevTasks]) copies all the existing tasks into a new array,
        // and 'task' is then appended to that new array. This is necessary because state
        // updates must be immutable (you must return a new array/object, not modify the old one).
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    /* <===== Incorrect implementation of this ===> 
    const toggleCompletedTask = (taskId) => {
        tasks.map((task) => {
            if (task.id == taskId) setTasks((prevTasks) => [...prevTasks, {...task, isCompleted: !task.isCompleted}]);
        });
    }; */

    // The primary reason we pass the function (toggleCompletedTask) down to the TodoItem is to keep the entire list's 
    // state centralized in the highest common ancestor, which is the TodoList component. This pattern is often 
    // called "lifting state up."
    const toggleCompletedTask = (taskId) => {
        setTasks((prevTasks) =>
            // 1. Map over all previous tasks
            prevTasks.map((task) => {
                // 2. Check for the task to be toggled
                if (task.id === taskId) {
                    // 3. Return a brand new task object with isCompleted flipped
                    //    (Ensures immutability by copying existing task properties)

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
            {tasks.map((task) => (
                <TodoItem task={task} onTaskCompleted={toggleCompletedTask} />
            ))}
        </>
    );
};
