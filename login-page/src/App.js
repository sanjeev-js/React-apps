import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.name === "email") {
      this.setState({ email: event.target.value });
    } else {
      this.setState({ password: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div className = "container">
      <h1>Sign In</h1>
        <div>
          <label>
            <b>Username</b>
          </label>
          <input
          onChange = {this.handleChange}
            type="text"
            placeholder="Enter Username"
            name="email"
            required
          />
        </div>
        <div>
          <label>
            <b>Password</b>
          </label>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Enter Password"
            name="password"
            required
          />
        </div>
        <button type="submit" onSubmit={this.handleSubmit}>
          Login
        </button>

        <div className="container">
          <button type="button" class="cancelbtn">
            Cancel
          </button>
          <span class="psw">
            Forgot <a href="https://google.com">password?</a>
          </span>
        </div>
        </div>
      </form>
    );
  }
}

export default App;
