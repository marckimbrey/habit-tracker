import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

class Habit extends React.Component {
  constructor(props) {
    super(props);
    const selected = this.props.dates.filter((date) => {
      return this.props.habit.days.indexOf(date) !== -1;
    });
    this.state = { selected: selected };
  }
  updateSelected(date) {
    const selectedDates = this.state.selected.slice();
    const index = selectedDates.indexOf(date);
    if (index !== -1) {
      selectedDates.splice(index, 1);
    } else {
      selectedDates.push(date);
    }
    this.setState({ selected: selectedDates });
  }

  daysOld(dateString) {
    const diff = Date.now() - dateString;
    return Math.round(diff / (1000 * 60 * 60 * 24)) + 1; //
  }

  render() {
    let daysOld = this.daysOld(this.props.habit.dateStarted);
    return (
      <tr className="habit">
        <td>
          <button
            className={"delete-btn"}
            value={this.props.habit.dateStarted}
            onClick={(e) => this.props.deleteHabit(e.target.value)}
          >
            X
          </button>
        </td>
        <td className="habit-title" style={{ color: this.props.color }}>
          {this.props.habit.name}
        </td>
        {this.props.dates.map((date, i) => {
          let color = "#666";
          if (this.state.selected.indexOf(date) !== -1) {
            color = this.props.color;
          }
          return (
            <td key={i}>
              <FontAwesomeIcon
                className="habit-check"
                icon={faCheck}
                key={date}
                style={{ color: color }}
                onClick={() => {
                  this.props.checkDay(this.props.habit.name, date);
                  this.updateSelected(date);
                }}
              />
            </td>
          );
        })}
        <td className="habit-total" style={{ color: this.props.color }}>
          {this.props.habit.days.length + "/" + daysOld}
        </td>
      </tr>
    );
  }
}

export default Habit;
