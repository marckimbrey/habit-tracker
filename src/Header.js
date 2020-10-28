import React from "react";
import AddHabitInput from "./AddHabitInput";

function Header(props) {
  return (
    <div className="App-header">
      <h1 className="title">
        HABIT<span>TRACKER</span>
      </h1>
      <AddHabitInput addHabit={props.addHabit} />
    </div>
  );
}

export default Header;
