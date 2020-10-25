import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Habit(props) {
  return (
    <tr className="habit">
      <td className="habit-title">{props.habit.name}</td>
      <td>
        <FontAwesomeIcon className="habit-check" icon={faCheck} />
      </td>
      <td>
        <FontAwesomeIcon className="habit-check" icon={faCheck} />
      </td>
      <td>
        <FontAwesomeIcon className="habit-check" icon={faCheck} />
      </td>
      <td>
        <FontAwesomeIcon className="habit-check" icon={faCheck} />
      </td>
      <td>
        <FontAwesomeIcon className="habit-check" icon={faCheck} />
      </td>
      <td>
        <FontAwesomeIcon className="habit-check" icon={faCheck} />
      </td>
      <td>
        <FontAwesomeIcon className="habit-check" icon={faCheck} />
      </td>
    </tr>
  );
}

export default Habit;
