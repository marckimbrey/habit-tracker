import React from "react";
import "./App.css";
import Header from "./Header";
import HabitList from "./HabitList";

class App extends React.Component {
  constructor(props) {
    super(props);
    // set habit state from localStorage
    if (window.localStorage["habits"]) {
      // get habits from localStorage
    } else {
      this.state = { habits: [{ name: "add new habit", days: [] }] };
    }
  }

  addHabit(habit) {
    const newHabit = { name: habit, days: [] };
    const newHabitState = [...this.state.habits, newHabit];
    localStorage.setItem("habit", JSON.stringify(newHabitState));
    this.setState({ habits: newHabitState });
  }

  checkDay(name, day) {
    const newState = this.state.habits.slice();
    const newHabit = newState.filter((habit) => (habit.name = name))[0];
    const index = newHabit.days.indexOf(day);
    if (index >= 0) {
      newHabit.days.splice(index, 1);
    } else {
      newHabit.days.push(day);
    }
    const updatedState = newState.map((habit) => {
      if (habit.name === newHabit.name) {
        return newHabit;
      } else {
        return habit;
      }
    });
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
