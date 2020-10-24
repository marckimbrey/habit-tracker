import React from "react";

function AddHabitButton(props) {
  //const classes = props.transition ? "add-habit-button" : "add-habit-button add-habit-button-active";
  return (
    <div
      className="add-habit-button"
      style={{ width: props.width + "px" }}
      onClick={props.toggleInput}
    ></div>
  );
}

export default AddHabitButton;
