import React from "react";

function Greeting() {
  const dateoftoday = new Date ().toDateString();

  return (
    <div>
      <h1>Hello, and Welcome to React Assignment 1!</h1>
      <p style={{color: "red", backgroundColor: "black", fontSize: "18px"}}>
        Todays Date: {dateoftoday}
      </p>
    </div>
  );
}

export default Greeting;