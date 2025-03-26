import React, {useState} from "react";

function TaskForm({setTasks}){
    const [task, setTask] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (task.trim()==="") return;

        setTasks((prevTasks)=> [...prevTasks, {id: Date.now(), text: task}]);

        setTask("");
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" id="input-task" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter Task"></input>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;