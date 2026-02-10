import React from "react";
import Greeting from "./Greeting";
import UserInfo from "./UserInfo";
import TaskComponent from "./TaskComponent";

function App() {
const tasks = [
"Study",
"Read",
"Practice Coding",
"Sleep",
];


function getRandomTask() {
const randomIndex = Math.floor(Math.random() * tasks.length);
return tasks[randomIndex];
}


const randomTask = getRandomTask();


return (
<div>
<Greeting/>
<UserInfo />
<TaskComponent task={randomTask} />
</div>
);
}


export default App;
