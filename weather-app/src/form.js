import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { TemperatureOfDelhi: 36, TemperatureOfMumbai: 34 };
  }
  render() {
    return (
      <div>
        <form onSubmit={this.state.TemperatureOfDelhi}>
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="Country..." />
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
}
