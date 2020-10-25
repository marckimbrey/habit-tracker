import React from "react";
import AddHabitButton from "./AddHabitButton";
import AddHabitInput from "./AddHabitInput";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputActive: false,
      width: 60,
    };
  }

  // function to control animation
  toggleInput(e) {
    let width = this.state.width === 60 ? window.innerWidth * 0.9 : 60;
    this.updateInputActive(600);
    this.setState({ width: width });
  }

  updateInputActive(delay) {
    setTimeout(() => {
      this.setState({ inputActive: !this.state.inputActive });
    }, delay);
  }

  render() {
    const active = this.state.inputActive;
    let input;
    if (active || window.innerWidth > 600) {
      // if button clicked or large screen
      input = (
        <AddHabitInput
          addHabit={this.props.addHabit}
          toggleInput={(e) => this.toggleInput(e)}
          isMobile={this.state.width}
        />
      );
    } else {
      input = (
        <AddHabitButton
          width={this.state.width}
          toggleInput={(e) => this.toggleInput(e)}
        />
      );
    }

    return <div className="App-header">{input}</div>;
  }
}

export default Header;
