"use client";
import { useState, useTransition } from "react";
import { Modal } from "./Modal";
import { addTodoAction } from "@/actions/todoActions";

export const TodoForm = () => {
    const [openModal, setModalOpen] = useState<boolean>(false);

    // isPending: true while the async action is running
    // startTransition: a wrapper to run the action
    const [isPending, startTransition] = useTransition();

    // We need a wrapper to close the modal after submission
    // because Server Actions don't automatically know about our client-side modal state.
    const handleSubmit = async (formData: FormData) => {
        startTransition(async () => {
            await addTodoAction(formData); // Call the server
            setModalOpen(false);
        });
    };

    return (
        <>
            <button onClick={() => setModalOpen(true)}>Add Task</button>
            {openModal && (
                <Modal isOpen={openModal} onClose={() => setModalOpen(false)}>
                    <form action={handleSubmit}>
                        <h2>Create Task</h2>
                        <input
                            type="text"
                            id="task"
                            name="task" // <--- CRITICAL: This matches 'formData.get("task")' in the action
                            placeholder="Enter your task"
                            required
                            disabled={isPending} // Disable input while adding
                        />
                        <button
                            type="submit"
                            disabled={isPending}
                            style={{ opacity: isPending ? 0.7 : 1 }}
                        >
                            {isPending ? "Adding..." : "Submit"}
                        </button>
                    </form>
                </Modal>
            )}
        </>
    );
};
