import React from "react";

function AddHabitInput(props) {
  //const closeHabitBtn = props.isMobile === 60? <div className="add-habit-close" onClick={props.toggleInput}></div>: '';
  return (
    <form
      className="add-habit"
      onSubmit={(e) => {
        e.preventDefault();
        const input = document.querySelector(".add-habit-input");
        props.addHabit(input.value);
      }}
    >
      <label for="add-habit">add habit</label>
      <input
        className="add-habit-input"
        name="add-habit"
        type="text"
        placeholder="New Habit"
      />
      <button type="submit">submit</button>
    </form>
  );
}

export default AddHabitInput;
