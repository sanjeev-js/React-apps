import React from "react";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user :{
      name: "",
      email: "",
      phone: "",
      school: "",
      study: "",
      aadhar : 'no',
      pan : 'no'
      }
    };
  }

  handleFullName = e => {
    this.setState({user:{name: e.target.value}});
    console.log("name",this.state.user.name);
  };

  handleEmail = e => {
    this.setState({user:{ email: e.target.value }});
    console.log("email",this.state.user.email);
  };

  handlePhone = e => {
    this.setState({user:{ phone: e.target.value }});
    console.log("phone",this.state.user.phone);
  };

  handleSelect = e => {
    this.setState({user:{ school: e.target.value }});
    console.log("school",this.state.user.school);
  };
  handleRadioButtons = e => {
    this.setState({user:{ study: e.target.value }});
    console.log(this.state.user.study);
  };

  handleCheckBox = e => {
    if (e.target.name === "aadhar") {
      this.setState ({user:{aadhar :e.target.value}});
    }else{
      this.setState({user:{pan:e.target.value}})
    }
    console.log (this.state.user)
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let userData = this.state.user;
    console.log(userData);
  };

  render() {
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
            {" "}
            <b>Documents:</b>
            <input
              type="checkbox"
              defaultChecked={false}
              name="aadhar"
              value="Yes"
              onClick={this.handleCheckBox}
            />
            Aadhar card
            <input
              type="checkbox"
              defaultChecked={false}
              name="pan"
              value="Yes"
              onClick={this.handleCheckBox}
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