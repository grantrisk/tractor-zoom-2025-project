"use client";
import { Todo } from "@/types/Todo";
import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";

type TodoListProps = {
    tasks: Todo[];
};
export const TodoList = ({ tasks }: TodoListProps) => {
    // Show a message if list is empty
    if (tasks.length === 0) {
        return (
            <div className="text-center py-10 text-gray-500">
                <TodoForm />
                <p>No tasks yet. Add one above!</p>
            </div>
        );
    }

    return (
        <>
            <TodoForm />
            <ul className="space-y-1">
                {tasks.map((task) => (
                    <TodoItem key={task.id} task={task} />
                ))}
            </ul>
        </>
    );
};
