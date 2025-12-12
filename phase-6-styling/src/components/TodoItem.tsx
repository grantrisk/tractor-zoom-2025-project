import { deleteTodoAction, toggleTodoAction } from "@/actions/todoActions";
import type { Todo } from "../types/Todo";

type TodoItemParam = {
    task: Todo;
};

export const TodoItem = ({ task }: TodoItemParam) => {
    const completed = task.isCompleted;

    return (
        <li className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors last:border-none">
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => toggleTodoAction(task.id)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                />
                <span
                    // TODO: replace with component for dynamic styling
                    className={`text-lg ${
                        completed ? "line-through text-gray-400" : "text-gray-800"
                    }`}
                >
                    {task.text}
                </span>
            </div>
            <button
                onClick={() => deleteTodoAction(task.id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded transition-all"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                </svg>
            </button>
        </li>
    );
};
