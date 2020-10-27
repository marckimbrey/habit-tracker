import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

class Habit extends React.Component {
  constructor(props) {
    super(props);
    const selected = this.props.dates.filter((date) => {
      return this.props.habit.days.indexOf(date) !== -1;
    });
    console.log(selected);
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

  render() {
    return (
      <tr className="habit">
        <td className="habit-title">{this.props.habit.name}</td>

        {this.props.dates.map((date, i) => {
          let color = "#666";
          if (this.state.selected.indexOf(date) !== -1) {
            color = "#fc3";
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
      </tr>
    );
  }
}

export default Habit;
// <td>
//   <FontAwesomeIcon className="habit-check" icon={faCheck} />
// </td>
// <td>
//   <FontAwesomeIcon className="habit-check" icon={faCheck} />
// </td>
// <td>
//   <FontAwesomeIcon className="habit-check" icon={faCheck} />
// </td>
// <td>
//   <FontAwesomeIcon className="habit-check" icon={faCheck} />
// </td>
// <td>
//   <FontAwesomeIcon className="habit-check" icon={faCheck} />
// </td>
// <td>
//   <FontAwesomeIcon className="habit-check" icon={faCheck} />
// </td>
// <td>
//   <FontAwesomeIcon className="habit-check" icon={faCheck} />
// </td>
