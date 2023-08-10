import { useState } from "react";
import TaskList from "./components/TaskList";
import "./App.css";
import TaskCreate from "./components/TaskCreate";

function App() {
  const taskList = [];
  const createTask = (taskInput, taskDescInput) => {
    const task = {
      title: taskInput,
      description: taskDescInput,
    };

    console.log(task);

    taskList.push(task);
    console.log(taskList);
  };
  return <TaskCreate onCreate={createTask} />;
  <TaskList />;
}

export default App;
