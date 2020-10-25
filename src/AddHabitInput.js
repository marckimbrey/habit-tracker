import React from "react";

function AddHabitInput(props) {
  //const closeHabitBtn = props.isMobile === 60? <div className="add-habit-close" onClick={props.toggleInput}></div>: '';
  return (
    <form className="add-habit">
      <label for="add-habit">add habit</label>
      <input className="add-habit-input" name="add-habit" type="text" />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          const input = document.querySelector(".add-habit-input");
          props.addHabit(input.value);
        }}
      >
        submit
      </button>
    </form>
  );
}

export default AddHabitInput;
