import React from "react";
import './table.css'

var data = {}
var allData = [ {
  name : "",
  email: "",
  phone: "",
  school: "",
  study: "",
  aadhar: false,
  pan: false
}]

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      name : "",
      email: "",
      phone: "",
      school: "",
      study: "",
      aadhar: false,
      pan: false
    };
  }

  handleFullName = e => {
    this.setState({ name: e.target.value });
  };

  handleEmail = e => {
    this.setState({ email: e.target.value });
  };

  handlePhone = e => {
    this.setState({ phone: e.target.value });
  };

  handleSelect = e => {
    this.setState({ school: e.target.value });
  };
  handleRadioButtons = e => {
    this.setState({ study: e.target.value });
  };

  handleCheckBox = e => {
    if (e.target.name === "aadhar") {
      this.setState({ aadhar: !this.state.aadhar });
    } else if (e.target.name === "pan") {
      this.setState({ pan: !this.state.pan });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    data.name = this.state.name;
    data.email = this.state.email;
    data.phone = this.state.phone;
    data.school = this.state.school;
    data.study = this.state.study;
    data.aadhar = this.state.aadhar;
    data.pan = this.state.pan;
    allData.push (data)
    this.setState({
      name: "",
      email: "",
      phone: "",
      school: "",
      study: "",
      aadhar: false,
      pan: false
    });
    document.getElementById('one').checked = false;
    document.getElementById('two').checked = false;
    document.getElementById('three').checked = false;
  };

  renderTableData() {
    return allData.map((student, index) => {
      const {name, email, phone, school, study, aadhar, pan} = student;
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phone}</td>
          <td>{school}</td>
          <td>{study}</td>
          <td>{aadhar}</td>
          <td>{pan}</td>
        </tr>
      );
    });
  }
  renderTableHeader() {
    let header = Object.keys(allData[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  handleEdit = (e) => {
    e.preventDefault();
    this.setState ({name: data.name})
    this.setState ({email: data.email})
    this.setState ({phone: data.phone})
    this.setState ({school : data.school})
    this.setState ({study: data.study})
    this.setState ({aadhar : data.aadhar})
    this.setState ({pan : data.pan})
    document.getElementById('one').checked = data.study;
    document.getElementById('two').checked = data.aadhar;
    document.getElementById('three').checked = data.pan;
  }

  render() {
    console.log(allData);
    return (
      <form>
        <div>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
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
              value={this.state.email}
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
              value={this.state.phone}
              onChange={this.handlePhone}
            />
          </label>
        </div>
        <div>
          <label>
            school
            <select onChange={this.handleSelect} value={this.state.school}>
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
              id = "one"
              onClick={this.handleRadioButtons}
            />
            Yes
            <input
              type="radio"
              name="study"
              value="no"
              id = "one"
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
              id = "two"
              checked={this.state.aadhar}
              onChange={this.handleCheckBox}
            />
            Aadhar card
            <input
              type="checkbox"
              name="pan"
              id = "three"
              checked={this.state.pan}
              onChange={this.handleCheckBox}
            />
            Pan Card
          </label>
        </div>
        <div>
          <input type="submit" value="submit" onClick={this.handleSubmit} />
          <button onClick={this.handleEdit}>Edit</button>
        </div>
        <div>
          <table align="center" id="students">
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
      </form>
    );
  }
}

export default UserInfo;
