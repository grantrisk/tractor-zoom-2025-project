import fs from "fs/promises";
import path from "path";
import { Todo } from "@/types/Todo";

const DB_PATH = path.join(process.cwd(), "db.json");

export async function getTodos(): Promise<Todo[]> {
    // THE CHAOS MONKEY
    // Simulate a 50% chance of the DB being down
    if (Math.random() > 0.7) {
        throw new Error("Failed to connect to the Task Database (Simulated in db.ts).");
    }
    try {
        const data = await fs.readFile(DB_PATH, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

export async function saveTodos(todos: Todo[]) {
    await fs.writeFile(DB_PATH, JSON.stringify(todos, null, 2));
}
