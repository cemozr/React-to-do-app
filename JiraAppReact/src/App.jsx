import { useState } from "react";
import TaskList from "./components/TaskList";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskShow from "./components/TaskShow";

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
  const deleteTask = (id) => {
    const afterDelete = taskList.filter((task) => {
      if (task.id !== id) {
        return task;
      }
    });
    setTaskList(afterDelete);
  };
  const updateTask = (id, updatedTaskInput, updatedTaskDescInput) => {
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
