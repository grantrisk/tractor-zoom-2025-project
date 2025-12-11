"use client";
import { useTodos } from "@/context/TodoContext";
import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
    const { tasks } = useTodos();

    return (
        <>
            <TodoForm />
            <h3>TODO List:</h3>
            {tasks.map((task) => (
                <TodoItem key={task.id} task={task} />
            ))}
        </>
    );
};
