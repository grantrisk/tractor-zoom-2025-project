import { useState, type FormEvent } from "react";
import { Modal } from "./Modal";
import type { Todo } from "../types/Todo";

type TodoFormParam = {
    onAddTask: (task: Todo) => void
}

export const TodoForm = ({ onAddTask }: TodoFormParam) => { // AI-generated: `onAddTask` is a prop (function) passed from the parent `TodoList` component, demonstrating data flow from parent to child.
    // AI-generated comment:
    // `useState` is a React Hook that lets you add state to functional components.
    // It returns a pair: the current state value (`openModal`) and a function that lets you update it (`setModalOpen`).
    // When `setModalOpen` is called, React re-renders the component with the new state.
    const [openModal, setModalOpen] = useState(false);
    // AI-generated comment:
    // This `useState` hook manages the text input for a new task.
    // `taskText` holds the current value of the input field.
    const [taskText, setTaskText] = useState("");
    // Before (with my original code):
    // const addTask = () => {
    //     const newId = Date.now();
    //     const newTask = { id: newId, text: taskText, isCompleted: false };
    //     onAddTask(newTask);
    //     setModalOpen(false);
    // };

    // After (with AI Recommended Change):
    const addTask = (e: FormEvent) => {
        // AI-generated comment:
        // `e.preventDefault()` is a standard DOM event method that stops the browser's default action.
        // For a form submission, the default action is to reload the page, which would cause React's
        // state to be reset. We prevent this to handle the submission with JavaScript.
        e.preventDefault();

        const newId = Date.now();
        const newTask = { id: newId, text: taskText, isCompleted: false };
        onAddTask(newTask); // AI-generated: Calls the `onAddTask` prop (function) passed from `TodoList` to add the new task to the main state.
        setModalOpen(false);

        // (Optional: Clear the input text after submission)
        setTaskText(""); // AI-generated: Clears the input field after task submission by updating the `taskText` state.
    };
    return (
        <>
            {/* AI-generated comment:
                `onClick` is an event handler that triggers the provided function when the button is clicked.
                Here, it updates the `openModal` state to `true`, which will cause the Modal component to render.
            */}
            <button onClick={() => setModalOpen(true)}>Add Task</button>
            {/* AI-generated comment:
                This is conditional rendering: the Modal component (and its children) will only be rendered
                if `openModal` is `true`. The `&&` operator short-circuits if `openModal` is false.
            */}
            {openModal && (
                <Modal isOpen={openModal} onClose={() => setModalOpen(false)}>
                    {/* AI-generated comment:
                        `onSubmit` is an event handler for the form. When the form is submitted (e.g., by clicking
                        a submit button or pressing Enter in an input field), the `addTask` function is called.
                    */}
                    <form onSubmit={addTask}>
                        <h2>Create Task</h2>
                        <input
                            type="text"
                            id="task"
                            name="task"
                            placeholder="Enter your task"
                            // 💡 onChange Handler Explanation (AI-generated refinement):
                            // This `onChange` handler is crucial for creating a "controlled component" in React.
                            // The input's value (`taskText`) is managed entirely by React state.
                            // Every time the user types, `setTaskText` updates the state, and the input re-renders
                            // with the new `taskText` value. This ensures that React is the single source of truth
                            // for the input's value, simplifying form handling and validation.
                            // The 'onChange' event is triggered every time the input's value changes (i.e., every keypress).
                            // The handler receives a single argument, 'e', which is the synthetic **React event object**.
                            // This object acts as a cross-browser wrapper around the browser's native event.
                            // To access the current value of the input field, we use:
                            // 1. **e.target**: Refers to the DOM element that fired the event (in this case, the <input> element).
                            // 2. **e.target.value**: Accesses the current 'value' property of that input element.
                            // The arrow function immediately calls **setTaskText** with this new value, updating the **taskText** state.
                            onChange={(e) => setTaskText(e.target.value)}
                        />
                        {/* If no type is defined, "submit" is applied by default */}
                        <button type="submit">Submit</button>
                    </form>
                </Modal>
            )}
        </>
    );
};
