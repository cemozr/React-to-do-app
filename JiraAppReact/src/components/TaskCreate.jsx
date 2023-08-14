import { useState } from "react";
import "../../public/taskCreate.css";
import App from "../App";
import TaskList from "./TaskList";

function TaskCreate({ onCreate }) {
  const [taskInput, setTaskInput] = useState("");
  const [taskDescInput, setTaskDescInput] = useState("");

  const taskInputHandler = (e) => {
    setTaskInput(e.target.value);
  };

  const taskDescInputHandler = (e) => {
    setTaskDescInput(e.target.value);
  };
  const createTaskHandler = (e) => {
    e.preventDefault();
    onCreate(taskInput, taskDescInput);
    setTaskInput(" ");
    setTaskDescInput(" ");
  };
  return (
    <div>
      <form className="task-form">
        <label>Task Giriniz</label>
        <input
          className="task-input"
          type="text"
          placeholder=" Task Giriniz"
          onChange={taskInputHandler}
          value={taskInput}
        />
        <label>Açıklama</label>
        <input
          className="task-input "
          type="text"
          placeholder=" Açıklama Giriniz"
          onChange={taskDescInputHandler}
          value={taskDescInput}
        />
        <button
          className="create-task-btn"
          type="submit"
          onClick={createTaskHandler}
        >
          Oluştur
        </button>
        <h1>Görevler</h1>
      </form>
    </div>
  );
}

export default TaskCreate;
