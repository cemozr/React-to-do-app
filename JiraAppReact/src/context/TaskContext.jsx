import { useState, createContext } from "react";
import axios from "axios";
const TasksContext = createContext();

function Provider({ children }) {
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
  const sharedValuesandMethods = {
    taskList,
    createTask,
    fetchTasks,
    deleteTask,
    updateTask,
  };
  return (
    <TasksContext.Provider value={sharedValuesandMethods}>
      {children}
    </TasksContext.Provider>
  );
}
export { Provider };
export default TasksContext;
