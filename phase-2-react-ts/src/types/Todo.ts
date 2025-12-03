/**
 * ==========================================
 * TypeScript Data Definitions: Quick Ref
 * ==========================================
 *
 * 1. TYPE ALIAS (Currently Used below)
 * - Syntax:   `type Todo = { ... }`
 * - Use Case: specific to this project. Best for unions (e.g., `type Status = 'done' | 'pending'`),
 * primitives, tuples, and general object shapes.
 * - Key Trait: Flexible. Can define almost anything, not just objects.
 *
 * 2. INTERFACE (Commented out below)
 * - Syntax:   `interface Todo { ... }`
 * - Use Case: Best for defining "contracts" for Objects or Classes.
 * - Key Trait: "Open". Supports Declaration Merging (you can declare 'interface Todo'
 * again elsewhere to add more properties to it automatically).
 *
 * Verdict: For a simple object like this, both work perfectly fine.
 */

export type Todo = {
    id: number;
    text: string;
    isCompleted: boolean;
};

/* // Alternative implementation using Interface:
export interface Todo {
    id: number;
    text: string;
    isCompleted: boolean;
} 
*/