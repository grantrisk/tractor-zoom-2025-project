import { TodoList } from "@/components/TodoList";
import { TodoProvider } from "@/context/TodoContext";
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
        <>
            <h1>TractorZoom 2025 TODO Project</h1>
            <TodoProvider initialTasks={serverSideTasks}>
                <TodoList />
            </TodoProvider>
        </>
    );
}
