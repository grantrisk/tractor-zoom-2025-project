import { TodoList } from "@/components/TodoList";
import { TodoProvider } from "@/context/TodoContext";
import { getTodos } from "@/lib/db";

/* LEARNING NOTE: ASYNC SERVER COMPONENTS
  Server Components can be 'async'. This allows us to 'await' data 
  fetching logic (like a DB query) directly inside the component body.
*/

export default async function Home() {
    // SIMULATE SLOW NETWORK
    // We pause here for 2 seconds. Next.js will look for a loading.tsx
    // to show during this pause.
    // ‼️ After adding or deleting a task, this will cause a delay in the
    // task to appear as well
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const todos = await getTodos();
    return (
        <>
            <h1>TractorZoom 2025 TODO Project</h1>
            <TodoProvider initialTasks={todos}>
                <TodoList tasks={todos} />
            </TodoProvider>
        </>
    );
}
