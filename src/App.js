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
    //this.setState{habits:}
  }

  deleteHabit() {}
  render() {
    return (
      <div className="App">
        <Header addHabit={this.addHabit.bind(this)}></Header>
        <HabitList />
      </div>
    );
  }
}

export default App;
