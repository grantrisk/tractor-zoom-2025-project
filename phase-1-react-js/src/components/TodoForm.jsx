import { useState } from "react";
import { Modal } from "./Modal";

export const TodoForm = ({ onAddTask }) => {
    const [openModal, setModalOpen] = useState(false);
    const [taskText, setTaskText] = useState("");
    // Before (with my original code):
    // const addTask = () => {
    //     const newId = Date.now();
    //     const newTask = { id: newId, text: taskText, isCompleted: false };
    //     onAddTask(newTask);
    //     setModalOpen(false);
    // };

    // After (with AI Recommended Change):
    const addTask = (e) => {
        // STOP the browser from reloading the page
        e.preventDefault();

        const newId = Date.now();
        const newTask = { id: newId, text: taskText, isCompleted: false };
        onAddTask(newTask);
        setModalOpen(false);

        // (Optional: Clear the input text after submission)
        setTaskText("");
    };
    return (
        <>
            <button onClick={() => setModalOpen(true)}>Add Task</button>
            {openModal && (
                <Modal isOpen={openModal} onClose={() => setModalOpen(false)}>
                    <form onSubmit={addTask}>
                        <h2>Create Task</h2>
                        <input
                            type="text"
                            id="task"
                            name="task"
                            placeholder="Enter your task"
                            // 💡 onChange Handler Explanation:
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
