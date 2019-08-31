import React from "react";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        email: "",
        phone: "",
        school: "",
        study: "",
        aadhar: false,
        pan: false
      };
  }

  handleFullName = e => {
    this.setState({name: e.target.value});
  };

  handleEmail = e => {
    this.setState({ email: e.target.value});
  };

  handlePhone = e => {
    this.setState({phone: e.target.value});
  };

  handleSelect = e => {
    this.setState({school: e.target.value});
  };
  handleRadioButtons = e => {
    this.setState({study: e.target.value});
  };

  handleCheckBox = e => {
    if (e.target.name === "aadhar") {
      this.setState(prevState => ({
        user: {
          ...prevState.user,
          aadhar: !prevState.user.aadhar
        }
      }));
    } else if (e.target.name === "pan") {
      this.setState(prevState => ({
        user: {
          ...prevState.user,
          pan: !prevState.user.pan
        }
      }));
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    let userData = this.state.user;
  };

  render() {
    console.log(this.state);
    return (
      <form>
        <div>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.user.name}
              onChange={this.handleFullName}
            />
          </label>
          <br />
        </div>
        <div>
          <label>
            Email
            <input
              type="text"
              name="emial"
              value={this.state.user.email}
              onChange={this.handleEmail}
            />{" "}
            <br />
          </label>
        </div>
        <div>
          <label>
            {" "}
            Phone
            <input
              type="number"
              name="phone"
              value={this.state.user.phone}
              onChange={this.handlePhone}
            />
          </label>
        </div>
        <div>
          <label>
            school
            <select onChange={this.handleSelect} value={this.state.user.school}>
              <option value="select">Select School</option>
              <option value="sbv">Sbv Ramesh Nagar</option>
              <option value="skv">Skv Ramesh Nagar</option>
              <option value="Dps">Delhi Public school</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            <b>Do you want to study More?</b>
            <input
              type="radio"
              name="study"
              value="yes"
              onClick={this.handleRadioButtons}
            />
            Yes
            <input
              type="radio"
              name="study"
              value="no"
              onClick={this.handleRadioButtons}
            />
            NO
          </label>
        </div>
        <div>
          <label>
            <b>Documents:</b>
            <input
              type="checkbox"
              name="aadhar"
              checked={this.state.user.aadhar}
              onChange={this.handleCheckBox}
            />
            Aadhar card
            <input
              type="checkbox"
              name="pan"
              checked={this.state.user.pan}
              onChange={this.handleCheckBox}
            />
            Pan Card
          </label>
        </div>
        <div>
          <input type="submit" value="submit" onClick={this.handleSubmit} />
        </div>
      </form>
    );
  }
}

export default UserInfo;
