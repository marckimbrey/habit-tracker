import React from "react";
import Habit from "./Habit";

function HabitList(props) {
  let dates = [];
  for (let x = 0; x < 7; x++) {
    let date = new Date();
    date.setDate(date.getDate() - x);
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();
    dates[x] = day + "/" + month;
  }
  return (
    <table className="habit-list">
      <thead>
        <tr>
          <th></th>
          <th></th>
          {dates.map((date, i) => {
            return <th key={i}>{date}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {props.habits.map((habit, i) => {
          let color = i % 2 === 0 ? "#fc3" : "#c8f";
          return (
            <Habit
              habit={habit}
              dates={dates}
              color={color}
              checkDay={props.checkDay}
              deleteHabit={props.deleteHabit}
              key={i}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default HabitList;
