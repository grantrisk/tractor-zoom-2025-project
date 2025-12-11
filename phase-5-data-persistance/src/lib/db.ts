import fs from "fs/promises";
import path from "path";
import { Todo } from "@/types/Todo";

const DB_PATH = path.join(process.cwd(), "db.json");

export async function getTodos(): Promise<Todo[]> {
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
