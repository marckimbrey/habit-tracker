import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

class Habit extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <tr className="habit">
        <td className="habit-title">{this.props.habit.name}</td>

        {this.props.dates.map((date, i) => {
          return (
            <td key={i}>
              <FontAwesomeIcon
                className="habit-check"
                icon={faCheck}
                key={date}
                onClick={() => this.props.checkDay(this.props.habit.name, date)}
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
