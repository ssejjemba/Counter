import React from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div data-testid="application_container">
        <h1 data-testid="counter_display">{`The counter is ${this.state.count}`}</h1>
        <button
          data-testid="increment_button"
          onMouseEnter={() => this.setState({ count: this.state.count + 1 })}
        >
          Increase count
        </button>
        <button
          data-testid="decrement_button"
          onMouseEnter={() => this.setState({ count: this.state.count - 1 })}
        >
          Decrease count
        </button>
      </div>
    );
  }
}

export default App;
