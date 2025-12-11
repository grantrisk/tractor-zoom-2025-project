"use client";
import { Todo } from "@/types/Todo";
import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";

type TodoListProps = {
    tasks: Todo[];
};

export const TodoList = ({ tasks }: TodoListProps) => {
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
