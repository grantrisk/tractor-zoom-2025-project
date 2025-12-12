"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service (like Sentry)
        console.error("Runtime Error:", error);
    }, [error]);

    return (
        <div style={{ padding: "2rem", textAlign: "center", color: "#333" }}>
            <h2 style={{ color: "#e74c3c" }}>Something went wrong!</h2>
            <p style={{ marginBottom: "1rem" }}>{error.message}</p>

            {/* The Reset Button */}
            {/* When clicked, Next.js will re-run the Page component. 
                If it succeeds this time (because Math.random was kind), 
                the error UI is replaced by the actual page. */}
            <button
                onClick={() => reset()}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#3498db",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                Try Again
            </button>
        </div>
    );
}
