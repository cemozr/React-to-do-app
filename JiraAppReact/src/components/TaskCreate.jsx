import { useState } from "react";
import "../../public/taskCreate.css";
import App from "../App";
import TaskList from "./TaskList";

function TaskCreate({ onCreate, editMode, onUpdate, task }) {
  const [taskInput, setTaskInput] = useState(editMode ? task.title : "");
  const [taskDescInput, setTaskDescInput] = useState(
    editMode ? task.description : ""
  );

  const taskInputHandler = (e) => {
    setTaskInput(e.target.value);
  };

  const taskDescInputHandler = (e) => {
    setTaskDescInput(e.target.value);
  };

  const createTaskHandler = (e) => {
    e.preventDefault();
    if (editMode) {
      onUpdate(task.id, taskInput, taskDescInput);
    } else {
      onCreate(taskInput, taskDescInput);
      setTaskInput(" ");
      setTaskDescInput(" ");
    }
  };
  return (
    <div>
      {editMode ? (
        <form className="task-form task-form-edit-mode">
          <label>Görev İsmini Düzenleyiniz</label>
          <input
            className="task-input task-input-title task-input-edit-mode"
            type="text"
            placeholder="Görev Giriniz"
            onChange={taskInputHandler}
            value={taskInput}
          />
          <label>Açıklamayı Düzenleyiniz</label>

          <textarea
            className="task-input task-input-edit-mode"
            name=""
            id=""
            cols="100"
            rows="8"
            placeholder=" Açıklama Giriniz"
            onChange={taskDescInputHandler}
            value={taskDescInput}
          ></textarea>
          <button
            className="create-task-btn task-input-edit-mode"
            type="button"
            onClick={createTaskHandler}
          >
            Düzenle
          </button>
          {/* <h1></h1> */}
        </form>
      ) : (
        <form className="task-form">
          <label>Görev</label>
          <input
            className="task-input task-input-title"
            type="text"
            placeholder="Görev Giriniz"
            onChange={taskInputHandler}
            value={taskInput}
          />
          <label>Açıklama</label>

          <textarea
            className="task-input"
            name=""
            id=""
            cols="100"
            rows="8"
            placeholder=" Açıklama Giriniz"
            onChange={taskDescInputHandler}
            value={taskDescInput}
          ></textarea>
          <button
            className="create-task-btn"
            type="button"
            onClick={createTaskHandler}
          >
            Oluştur
          </button>
          <h1></h1>
        </form>
      )}
    </div>
  );
}

export default TaskCreate;
