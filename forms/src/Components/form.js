import React from "react";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      user: {
        name: "",
        email: "",
        phone: "",
        school: "",
        study: "",
        aadhar: false,
        pan: false
      }
    };
  }

  handleFullName = e => {
    this.setState({ user: { name: e.target.value } });
    console.log("name", this.state.user.name);
  };

  handleEmail = e => {
    this.setState({ user: { email: e.target.value } });
    console.log("email", this.state.user.email);
  };

  handlePhone = e => {
    this.setState({ user: { phone: e.target.value } });
    console.log("phone", this.state.user.phone);
  };

  handleSelect = e => {
    this.setState({ user: { school: e.target.value } });
    console.log("school", this.state.user.school);
  };
  handleRadioButtons = e => {
    this.setState({ user: { study: e.target.value } });
    console.log(this.state.user.study);
  };

  handleCheckBox = e => {
    // this.setState({ checked: true });
    // // console.log(this.state, "after checked to true")
    // if (this.state.checked) {
    //   if (e.target.name === "aadhar") {
    //     this.setState({ user: { aadhar: e.target.value } });
    //   } else {
    //     this.setState({ user: { pan: e.target.value } });
    //   }
    // } else {
    //   if (e.target.name === "aadhar") {
    //     this.setState({ user: { aadhar: "no" } });
    //   } else {
    //     this.setState({ user: { pan: "no" } });
    //     // console.log(this.state);
    //   }
    // }
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
    // let newState = {};
    // if (e.target.name === "aadhar") {
    //     newState =  {
    //       aadhar: !prevState.user.aadhar
    //     }
    // } else if (e.target.name === "pan") {
    //     newState = {
    //       pan: !prevState.user.pan
    //     }
      
    // }
    // this.setState(prevState => ({
    //   user: {
    //     ...prevState.user,
        
    //   }
    // }));
  };

  handleSubmit = e => {
    e.preventDefault();
    let userData = this.state.user;
    // console.log(userData);
  };

  handleCheck = () => {
    this.setState(prevState => ({ checked: !prevState.checked }));
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
