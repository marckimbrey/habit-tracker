import React from "react";
import "./App.css";
import Header from "./Header";
import HabitList from "./HabitList";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(localStorage.getItem("habits"));
    // set habit state from localStorage
    if (window.localStorage["habits"]) {
      // get habits from localStorage
      this.state = { habits: JSON.parse(localStorage.getItem("habits")) };
    } else {
      this.state = {
        habits: [
          {
            name: "add new habit",
            days: [],
            dateStarted: Date.now(),
          },
        ],
      };
    }
  }

  addHabit(habit) {
    const newHabit = { name: habit, days: [], dateStarted: Date.now() };
    const newHabitState = [...this.state.habits, newHabit];
    localStorage.setItem("habits", JSON.stringify(newHabitState));
    this.setState({ habits: newHabitState });
  }

  checkDay(name, day) {
    const newState = this.state.habits.map((habit) => habit);
    const newHabit = newState.filter((habit) => habit.name === name)[0];
    const index = newHabit.days.indexOf(day);
    if (index !== -1) {
      newHabit.days.splice(index, 1); // remove if already exists
    } else {
      newHabit.days.push(day);
    }
    const updatedState = newState.map((habit) => {
      if (habit.name === newHabit.name) {
        return newHabit; // return updated habit
      } else {
        return habit;
      }
    });
    localStorage.setItem("habits", JSON.stringify(updatedState));
    this.setState({ habits: updatedState });
  }

  deleteHabit() {}
  render() {
    return (
      <div className="App">
        <Header addHabit={this.addHabit.bind(this)}></Header>
        <HabitList
          habits={this.state.habits}
          checkDay={this.checkDay.bind(this)}
        />
      </div>
    );
  }
}

export default App;
