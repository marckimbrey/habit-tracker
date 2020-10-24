import React from "react";

function AddHabitInput(props) {
  return (
    <div className="add-habit">
      <label for="add-habit">add habit</label>
      <input className="add-habit-input" name="add-habit" type="text" />
      <div className="add-habit-close" onClick={props.toggleInput}>
        close
      </div>
    </div>
  );
}

export default AddHabitInput;
