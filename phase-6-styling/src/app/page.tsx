import { TodoList } from "@/components/TodoList";
import { TodoProvider } from "@/context/TodoContext";
import { getTodos } from "@/lib/db";

export default async function Home() {
    const todos = await getTodos();
    return (
        <main className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-blue-600 p-6">
                    <h1 className="text-3xl font-bold text-white text-center">
                        TractorZoom 2025 TODO Project
                    </h1>
                </div>
                <div className="p-6">
                    <TodoProvider initialTasks={todos}>
                        <TodoList tasks={todos} />
                    </TodoProvider>
                </div>
            </div>
        </main>
    );
}
