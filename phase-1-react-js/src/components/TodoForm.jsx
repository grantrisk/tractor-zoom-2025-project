export const TodoForm = ({ onAddTask }) => {
    const addTask = () => {
        const newId = Date.now();
        const newTask = { id: newId, text: "New Task from Form", isCompleted: false };
        onAddTask(newTask);
    };
    return (
        <>
            <button onClick={addTask}>Add Task</button>
        </>
    );
};
