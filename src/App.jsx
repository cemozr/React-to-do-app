import TaskList from "./components/TaskList";
import "../public/App.css";
import TaskCreate from "./components/TaskCreate";
import { useEffect, useContext } from "react";
import TasksContext from "./context/TaskContext";

function App() {
  const { fetchTasks } = useContext(TasksContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <TaskCreate />
      <TaskList />
    </div>
  );
}

export default App;
