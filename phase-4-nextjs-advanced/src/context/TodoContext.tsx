"use client"; // Context is an interactive React feature, so it must be Client-Side
import { createContext, useContext, useReducer, ReactNode } from "react";
import { Todo } from "@/types/Todo";
import { todoReducer, TodoAction } from "@/reducers/todoReducer";

/* 
    The Concept:
    - The Context Object: Think of this as the "channel" or "frequency" we are broadcasting on.
    - The Provider: This is the radio tower. It wraps around our components and broadcasts the signal (the state and the dispatch function).
    - The Hook: This is the radio receiver. Any component can use it to tune in and listen.
 */

// Define the shape of the data we are broadcasting
// We want to share the list of tasks AND the ability to change them (dispatch)
type TodoContextType = {
    tasks: Todo[];
    dispatch: React.Dispatch<TodoAction>;
};

// Create the Context
// We set the default value to null because we haven't set up the provider yet.
const TodoContext = createContext<TodoContextType | null>(null);

// The Provider Component
// This component will wrap our whole app (or the part that needs todos).
// It needs to accept 'children' (the app) and 'initialTasks' (from the server).
type TodoProviderProps = {
    children: ReactNode;
    initialTasks: Todo[];
};

export const TodoProvider = ({ children, initialTasks }: TodoProviderProps) => {
    const [state, dispatch] = useReducer(todoReducer, initialTasks);

    return (
        // We pass the values down into the "value" prop.
        // If you named your state variable 'tasks', the value object is { tasks, dispatch }
        <TodoContext.Provider value={{ tasks: state, dispatch }}>{children}</TodoContext.Provider>
    );
};

// A Custom Hook to consume the context
// This saves us from having to import useContext and TodoContext in every file.
export const useTodos = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodos must be used within a TodoProvider");
    }
    return context;
};
