"use client";
import { useState, useTransition } from "react";
import { Modal } from "./Modal";
import { addTodoAction } from "@/actions/todoActions";

export const TodoForm = () => {
    const [openModal, setModalOpen] = useState<boolean>(false);

    const [isPending, startTransition] = useTransition();

    const handleSubmit = async (formData: FormData) => {
        startTransition(async () => {
            await addTodoAction(formData);
            setModalOpen(false);
        });
    };

    return (
        <>
            <button
                onClick={() => setModalOpen(true)}
                className="w-full mb-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add New Task
            </button>
            {openModal && (
                <Modal isOpen={openModal} onClose={() => setModalOpen(false)}>
                    <form action={handleSubmit} className="space-y-4">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Create New Task</h2>{" "}
                        <input
                            type="text"
                            id="task"
                            name="task"
                            placeholder="Enter your task"
                            required
                            disabled={isPending}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:bg-gray-100 disabled:text-gray-400"
                        />
                        <div className="flex gap-3 justify-end mt-6">
                            <button
                                type="button"
                                onClick={() => setModalOpen(false)}
                                disabled={isPending}
                                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isPending}
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-medium shadow-sm transition-all flex items-center gap-2"
                            >
                                {isPending ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Adding...
                                    </>
                                ) : (
                                    "Save Task"
                                )}
                            </button>
                        </div>
                    </form>
                </Modal>
            )}
        </>
    );
};
