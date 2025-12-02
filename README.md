# Tractor Zoom 2025 Project

This repostiory is strictly for learning all the intricacies of React and Next.js without using AI for code generation, only using AI for understanding topics and project ideas.

## The Goal

I am going to start out with a rudimentary TODO application. I want to add comments/documentation everywhere to explain all concepts and decisions. I am going to break this down in phases:

(AI generated below... probably will diverge on my own path but I do like the idea of starting with a basic project and then converting it across the phases to know what each thing brings to the table.)
### Phase 1: The React Foundation (Client-Side)
The first step is to build a standard, client-side-rendered TODO app using Create React App (or Vite) and plain JavaScript. This establishes a baseline and focuses purely on React fundamentals.

Core Concepts to Learn & Document:
- [x] Components: Functional components, JSX syntax, component composition (e.g., App, TodoList, TodoItem, TodoForm).
- [ ] State: The useState hook for managing the list of todos and form inputs. Understanding its immutability.
- [ ] Props: Passing data down the component tree (props drilling).
- [ ] Event Handling: Managing onSubmit for the form and onClick/onChange for list items (deleting, marking complete).
- [ ] Conditional Rendering: Showing different UI elements based on state (e.g., a "completed" style).
- [ ] List & Keys: Rendering lists with the map() method and the importance of the key prop.

### Phase 2: Introducing TypeScript
Once the React app works, the next phase is to refactor the entire application to use TypeScript. This will introduce static typing.

Core Concepts to Learn & Document:
- [ ] Configuration: Setting up tsconfig.json and understanding key options.
- [ ] Basic Types: Using string, number, boolean, array[].
- [ ] Interfaces & Types: Defining a Todo type (e.g., { id: string; text: string; completed: boolean; }). When to use interface vs. type.
Typing Components: How to type props using React.FC or (preferably) by typing the props object directly.
- [ ] Typing Hooks: Typing useState<Todo[]>(...).
- [ ] Typing Events: Correctly typing event handlers like React.FormEvent and React.MouseEvent.

### Phase 3: Migrating to Next.js
This is a major step. We will initialize a new Next.js (App Router) project with TypeScript and migrate our existing React components into it. The focus shifts from a client-only app to a full-stack framework.

Core Concepts to Learn & Document:
- [ ] Project Structure: The new app/ directory paradigm.
- [ ] File-Based Routing: Understanding page.tsx, layout.tsx, and loading.tsx.
- [ ] Server vs. Client Components: This is critical. What runs on the server vs. the client? The 'use client' directive. Why our interactive TODO app will need to be a Client Component (initially).
- [ ] Server-Side Rendering (SSR) vs. Static Site Generation (SSG): What Next.js does by default and what the options are.
- [ ] Routing & Layouts: How layout.tsx wraps page.tsx.

### Phase 4: Advanced React & State Management
With the app running in Next.js, we'll address a common React problem: state management. Instead of just props drilling, we'll explore better patterns.

Core Concepts to Learn & Document:
- [ ] React Context: Using createContext and the useContext hook to provide state to deep children without props drilling.
- [ ] useReducer Hook: Pairing useContext with useReducer for more complex state logic (managing add, delete, toggle actions in one place).
- [ ] Comparison: Documenting the trade-offs between useState, useContext, and useReducer.

### Phase 5: Next.js Full-Stack & Data Persistence
Our app is still client-side. This phase turns it into a full-stack application by using Next.js's built-in backend features.

Core Concepts to Learn & Document:
- [ ] Server Actions: The new, preferred way to handle form submissions and data mutations directly on the server.
- [ ] API Routes (Optional): Understanding the "old" way with the pages/api directory for comparison, or app/api route handlers.
- [ ] Data Fetching: Using fetch in Server Components.
- [ ] Data Persistence: Storing data. Start simple (e.g., a local JSON file or localStorage) before moving to a real database (e.g., Vercel Postgres, Supabase, or MongoDB Atlas).
- [ ] Caching & Revalidation: How Next.js caches data. Using revalidatePath or revalidateTag to update the UI when data changes.
- [ ] Loading/Error UI: Using Next.js conventions like loading.tsx and error.tsx to handle async states gracefully.

### Phase 6: Styling & Deployment
The final phase is to make the app look good and put it on the web.

Core Concepts to Learn & Document:
- [ ] Styling Methods: Explore and document different options.
- [ ] CSS Modules: Locally scoped CSS (the Next.js default).
- [ ] Tailwind CSS: Setting up and using a utility-first framework.
- [ ] Styled-Components / Emotion: (Optional) How CSS-in-JS works with the App Router.
- [ ] Deployment: Deploying the project to Vercel (the creators of Next.js) to understand the seamless deployment process, environment variables, and production builds.