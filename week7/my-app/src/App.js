import React, { useState } from "react"; 
import "./App.css";
import Header from "./components/header"; 
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks]= useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>TASK MANAGER</h1>
      </header>
      <TaskForm setTasks ={setTasks} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
