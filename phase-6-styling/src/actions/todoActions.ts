'use server'; // <--- The Magic Directive. 

import { getTodos, saveTodos } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { Todo } from "@/types/Todo";

/*
  SERVER ACTIONS
  These functions run strictly on the server. 
  They can be called directly from Client Components (like TodoForm).
*/

export async function addTodoAction(formData: FormData) {
    // Extract data from the form
    const text = formData.get("task") as string;
    
    // Simulate a slow network (helps us see Loading states later)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Database Logic
    const todos = await getTodos();
    const newTodo: Todo = {
        id: Date.now(),
        text: text,
        isCompleted: false
    };
    
    // Save to DB
    await saveTodos([...todos, newTodo]);

    // Revalidate
    // This tells Next.js: "The data on the homepage ('/') has changed. 
    // Please re-run the page.tsx code to fetch the fresh list."
    // Instead of our previous SPA (Single Page Application) and having 
    // the browser handle everything. We now have MPA (Multi-Page Application)
    // have the server do all the processing and then send the raw HTML back 
    // to the client. The catch is the netwrok latency of the switch from SPA
    // to MPA. Next.js is a hybrid where some is MPA and some is SPA. Some
    // is rendered client-side and some server-side.
    revalidatePath("/");
}

export async function deleteTodoAction(id: number) {
    const todos = await getTodos();
    const newTodos = todos.filter(t => t.id !== id);
    await saveTodos(newTodos);
    revalidatePath("/");
}

export async function toggleTodoAction(id: number) {
    const todos = await getTodos();
    const newTodos = todos.map(t => 
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
    );
    await saveTodos(newTodos);
    revalidatePath("/");
}