const TaskList = () => {
    let tasks = [
        { taskName: "Walk the dog", completed: false },
        { taskName: "Sing a song", completed: true },
        { taskName: "Bake a cake", completed: false },
        { taskName: "Get dressed", completed: true }
    ];
    return (
        <ul>
            {tasks.map((task) => <li>{ task.completed ? '\u2705' : '\u274C' } {task.taskName}</li>)}
        </ul>
    );
}

export default TaskList