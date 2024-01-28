import "../../public/taskCard.css";
import { useState, useContext } from "react";
import TaskCreate from "./TaskCreate";
import TasksContext from "../context/TaskContext";

function TaskShow({ task }) {
  const { deleteTask, updateTask } = useContext(TasksContext);

  const [editMode, setEditMode] = useState(false);
  const onDeleteHandler = () => {
    deleteTask(task.id);
  };
  const onUpdateHandler = () => {
    setEditMode(!editMode);
  };
  const handleSubmit = (id, updatedTaskInput, updatedTaskDescInput) => {
    updateTask(id, updatedTaskInput, updatedTaskDescInput);
    setEditMode(false);
  };

  return (
    <div className="task-card">
      {editMode ? (
        <TaskCreate editMode={editMode} task={task} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h2>Görev No: {task.id}</h2>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <div className="btn-container">
            <button
              className="create-task-btn"
              type="button"
              onClick={onUpdateHandler}
            >
              Düzenle
            </button>
            <button
              className="create-task-btn"
              type="button"
              onClick={onDeleteHandler}
            >
              Sil
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
