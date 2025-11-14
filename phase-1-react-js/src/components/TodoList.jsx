const initialTasks = [
    { id: 1, text: "Buy groceries", isCompleted: false },
    { id: 2, text: "Finish React project", isCompleted: false },
    { id: 3, text: "Walk the dog", isCompleted: true },
];

export const TodoList = () => {
    return (
        <>
            <h3>TODO List:</h3>
            {initialTasks.map((task) => (
                <li
                    key={task.id}
                    style={{
                        textDecoration: task.isCompleted ? "line-through" : "none",
                        color: task.isCompleted ? "#888" : "#000",
                    }}
                >
                    {task.text}
                </li>
            ))}
        </>
    );
};
