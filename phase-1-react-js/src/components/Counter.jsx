import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <button onClick={() => setCount(count + 1)}>[Click Me]</button>
            <p>{count}</p>
        </>
    );
};
