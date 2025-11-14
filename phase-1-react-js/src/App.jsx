import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Counter } from "./components/Counter";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>TractorZoom 2025 Project</h1>
            {/* This click rerenders everything here including <Counter /> */}
            <button onClick={() => setCount(count + 1)}>[Click Me]</button>
            <p>{count}</p>
            {/* This clikc rerenders JUST <Counter /> */}
            <Counter />
        </>
    );
}

export default App;
