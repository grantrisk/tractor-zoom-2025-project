import { TodoList } from "@/components/TodoList";
import { Todo } from "@/types/Todo";

/* LEARNING NOTE: SERVER VS CLIENT BOUNDARY
   ----------------------------------------
   This 'Home' component is a Server Component (default in Next.js).
   It runs exclusively on the server (or during build time).
   
   Benefit: 
   1. It can access the database directly (securely).
   2. It sends zero JavaScript for itself to the browser (fast).
   
   Challenge:
   It cannot be interactive (no onClick, no useState).
   
   Solution:
   We fetch/define data here ('serverSideTasks') and pass it as a prop 
   to the 'TodoList' component. The 'TodoList' is marked with "use client",
   creating a boundary where we switch from Server Logic to Browser Logic.
*/

// "Simulating" a database fetch on the server.
// In a real app, this would be: const tasks = await db.query('SELECT * FROM todos');
const serverSideTasks: Todo[] = [
    { id: 1, text: "Buy groceries (Server Data)", isCompleted: false },
    { id: 2, text: "Finish React project (Server Data)", isCompleted: false },
    { id: 3, text: "Walk the dog (Server Data)", isCompleted: true },
];

export default function Home() {
    return (
        // AI-generated comment:
        // React Fragments (<>...</> or <React.Fragment>...</React.Fragment>) allow you to group multiple
        // elements without adding an extra node to the DOM. This is useful when you need to return
        // multiple elements from a component but don't want to wrap them in an unnecessary div.
        <>
            {/* AI-generated comment:
                JSX (JavaScript XML) is a syntax extension for JavaScript that looks like HTML.
                It allows you to write UI components using a syntax familiar to web developers,
                making the code more readable and expressive. Behind the scenes, JSX gets
                transpiled into regular JavaScript function calls (e.g., React.createElement).
            */}
            <h1>TractorZoom 2025 TODO Project</h1>
            {/* AI-generated comment:
                This demonstrates component composition. The `TodoList` component is rendered
                as a child of the `App` component, allowing `App` to manage the overall
                layout and `TodoList` to handle its specific responsibilities (displaying
                and managing todo items).
            */}
            <TodoList initialTasks={serverSideTasks}/>
        </>
    );
}
