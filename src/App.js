import React from "react";
import Greeting from "./Greeting";
import UserInfo from "./UserInfo";
import TaskComponent from "./TaskComponent";
import Counter from "./counter";
import TaskForm from "./TaskForm";

function App() {
  const tasks = [
    "Study",
    "Read",
    "Practice Coding",
    "Sleep",
    "Read LOTR for the 10th time"
  ];

  function handleAlert() {
    alert("Button was clicked!");
  }

  function getRandomTask() {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    return tasks[randomIndex];
  }

  const randomTask = getRandomTask();

  return (
<div>

      <Greeting username="Adia"/>
      <Greeting username="Ramsey"/>
      <UserInfo handleClick={handleAlert}/>
      <TaskComponent task={randomTask}/>
      <Counter/>
      <TaskForm/>
            <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
</div>
  );
}

export default App;