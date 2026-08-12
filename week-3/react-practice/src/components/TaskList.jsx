import { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  function addTask() {
    if (taskInput.trim() === "") return;

    setTasks([...tasks, taskInput]);
    setTaskInput("");
  }

  return (
    <section>
      <h2>My React Tasks</h2>

      <input
        type="text"
        value={taskInput}
        onChange={(event) => setTaskInput(event.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </section>
  );
}

export default TaskList;