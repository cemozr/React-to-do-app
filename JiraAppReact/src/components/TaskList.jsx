import "../../public/taskList.css";
import TaskShow from "./TaskShow";
import { useContext } from "react";
import TasksContext from "../context/TaskContext";

function TaskList({ onUpdate }) {
  const { taskList } = useContext(TasksContext);
  return (
    <div className="task-list">
      {taskList.map((task) => {
        return <TaskShow key={task.id} task={task} onUpdate={onUpdate} />;
      })}
    </div>
  );
}
export default TaskList;
