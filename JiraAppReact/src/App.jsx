import { useState } from "react";
import TaskList from "./components/TaskList";
import "./App.css";
import TaskCreate from "./components/TaskCreate";

function App() {
  const [taskList, setTaskList] = useState([]);
  const createTask = (taskInput, taskDescInput) => {
    const createdTasks = [
      ...taskList,
      {
        id: Math.round(Math.random() * 999999),
        title: taskInput,
        description: taskDescInput,
      },
    ];
    setTaskList(createdTasks);

    // console.log(taskList);
    // taskListHandler();
    // return (
    //   <div>
    //     <TaskList taskName={taskList[0].title} task={taskList[0].description} />
    //   </div>
    // );
  };
  return (
    <div>
      <TaskCreate onCreate={createTask} />
      <TaskList taskList={taskList} />
    </div>
  );
}

export default App;
