import "./App.css";
import { TodoList } from "./components/TodoList";

// AI-generated comment:
// App is a functional component, which is a JavaScript function that returns JSX.
// In modern React, functional components with Hooks are the standard way to write components.
export default function App() {
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
            <TodoList />
        </>
    );
}
