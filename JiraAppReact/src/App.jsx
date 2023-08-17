import { useState } from "react";
import TaskList from "./components/TaskList";
import "../public/App.css";
import TaskCreate from "./components/TaskCreate";
import TaskShow from "./components/TaskShow";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);

  const createTask = async (taskInput, taskDescInput) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      title: taskInput,
      description: taskDescInput,
    });
    const createdTasks = [...taskList, response.data];
    setTaskList(createdTasks);
    console.log(response.data);
  };
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTaskList(response.data);
  };
  useEffect(() => {
    fetchTasks();
  }, []);
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const afterDelete = taskList.filter((task) => {
      if (task.id !== id) {
        return task;
      }
    });
    setTaskList(afterDelete);
  };
  const updateTask = async (id, updatedTaskInput, updatedTaskDescInput) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: updatedTaskInput,
      description: updatedTaskDescInput,
    });
    const updatedTasks = taskList.map((task) => {
      if (task.id === id) {
        return {
          id,
          title: updatedTaskInput,
          description: updatedTaskDescInput,
        };
      }
      return task;
    });
    setTaskList(updatedTasks);
  };
  return (
    <div>
      <TaskCreate onCreate={createTask} />
      <TaskList
        taskList={taskList}
        onDelete={deleteTask}
        onUpdate={updateTask}
      />
    </div>
  );
}

export default App;
