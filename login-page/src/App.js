import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" , auth_token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lciI6eyJlbWFpbCI6InNhbmplZXYxOEBnbWFpbC5jb20iLCJwYXNzd29yZCI6InBhc3N3b3JkIn0sImlhdCI6MTU2NzkyMjUwNCwiZXhwIjoxNTY4MDA4OTA0fQ.3TYen2NNi3v1dMykJSjomgmzCSNlV-iGkUk2BuVy9tk"};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleLogin.bind(this);
  }

  handleChange(event) {
    if (event.target.name === "email") {
      this.setState({ email: event.target.value });
    } else {
      this.setState({ password: event.target.value });
    }
  }

  handleLogin = async (event) => {
    event.preventDefault();
      fetch('http://localhost:5000/customers/login', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "provider": "username",
              "data": {
                  "email": this.state.email,
                  "password": this.state.password,
                  "accessToken" :this.state.auth_token
              }
            })
          }).then((response) => response.json())
          .then((res) => {
        if(typeof(res.message) != "undefined"){
          alert("Error", "Error: "+ res.message);
        }
        else{
          alert("Welcome", " You have succesfully logged in");
          }
        }).catch((error) => {
            console.error(error);
          });
    }

  render() {
    console.log (this.state)
    return (
      <form onSubmit={this.handleSubmit}>
      <div className = "container">
      <h1>Sign In</h1>
        <div>
          <label>
            <b>Email</b>
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
        <input type="submit" name = 'submit' value = "Sign In" onSubmit={this.handleLogin}/>

        <div className="container">
          <button type="button" className="cancelbtn">
            Cancel
          </button>
          <span className="psw">
            Forgot <a href="https://google.com">password?</a>
          </span>
        </div>
        </div>
      </form>
    );
  }
}

export default App;
