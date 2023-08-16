import TaskList from "./TaskList";
import "../../public/taskCard.css";
import { useState } from "react";
import TaskCreate from "./TaskCreate";
function TaskShow({ task, onDelete, onUpdate }) {
  // console.log(task);
  const [editMode, setEditMode] = useState(false);
  const onDeleteHandler = () => {
    onDelete(task.id);
  };
  const onUpdateHandler = () => {
    setEditMode(!editMode);
  };
  const handleSubmit = (id, updatedTaskInput, updatedTaskDescInput) => {
    onUpdate(id, updatedTaskInput, updatedTaskDescInput);
    setEditMode(false);
  };

  return (
    <div className="task-card">
      {editMode ? (
        <TaskCreate editMode={editMode} onUpdate={handleSubmit} task={task} />
      ) : (
        <div>
          {" "}
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
