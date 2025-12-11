"use client";
import { useTodos } from "@/context/TodoContext";
import { useState, type FormEvent } from "react";
import { Modal } from "./Modal";

export const TodoForm = () => {
    const { dispatch } = useTodos();
    const [openModal, setModalOpen] = useState<boolean>(false);
    const [taskText, setTaskText] = useState<string>("");

    const addTask = (e: FormEvent) => {
        e.preventDefault();

        const newId = Date.now();
        const newTask = { id: newId, text: taskText, isCompleted: false };
        dispatch({ type: "ADDED", payload: newTask });
        setModalOpen(false);

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
                            onChange={(e) => setTaskText(e.target.value)}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </Modal>
            )}
        </>
    );
};
