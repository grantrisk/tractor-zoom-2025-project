// This only handle the page load, not interactive loading.
export default function Loading() {
    return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <h2 style={{ color: "#666" }}>Loading your tasks...</h2>
            {/* Simple CSS Spinner */}
            <div className="spinner"></div>

            <style>{`
                .spinner {
                    margin: 20px auto;
                    width: 40px;
                    height: 40px;
                    border: 4px solid #f3f3f3;
                    border-top: 4px solid #3498db;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
