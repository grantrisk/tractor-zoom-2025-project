import { Todo } from "@/types/Todo";

// Define the "Actions" - the slips of paper we pass to the reducer
// We use a "Discriminated Union" here. The 'type' property tells us which action it is.
export type TodoAction =
    | { type: "ADDED"; payload: Todo }
    | { type: "TOGGLED"; payload: number } // payload is the ID
    | { type: "DELETED"; payload: number }; // payload is the ID

// The Reducer Function
// It takes the current list of tasks (state) and an action.
// It returns the NEW list of tasks.
export const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
    switch (action.type) {
        case "ADDED": {
            return [...state, action.payload];
        }
        case "TOGGLED": {
            return state.map((task) => {
                if (task.id === action.payload) {
                    return { ...task, isCompleted: !task.isCompleted };
                }
                return task;
            });
        }
        case "DELETED": {
            return state.filter((task) => task.id !== action.payload);
        }
        default:
            return state;
    }
};
