import "../../public/taskList.css";
import TaskShow from "./TaskShow";

function TaskList({ taskList }) {
  return (
    <div className="task-list">
      {taskList.map((task) => {
        return <TaskShow key={task.id} task={task} />;
        // console.log(task);
      })}
    </div>
  );
}
export default TaskList;
