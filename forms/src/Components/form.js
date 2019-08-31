import React from "react";

var data = {};

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
        { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
        { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
        { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }],
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
      this.setState({aadhar: !this.state.aadhar})
    } else if (e.target.name === "pan") {
      this.setState({pan: !this.state.pan})
    }
  };

  handleSubmit = e => {
    e.preventDefault(); 
  };

  renderTableData() {
    return this.state.students.map((student, index) => {
        const { id, name, age, email } = student 
        return (
        <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{email}</td>
        </tr>
        )
    })
}
renderTableHeader() {
    let header = Object.keys(this.state.students[0])
    return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
    })
}

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
              checked={this.state.aadhar}
              onChange={this.handleCheckBox}
            />
            Aadhar card
            <input
              type="checkbox"
              name="pan"
              checked={this.state.pan}
              onChange={this.handleCheckBox}
            />
            Pan Card
          </label>
        </div>
        <div>
          <input type="submit" value="submit" onClick={this.handleSubmit} />
        </div>
        <div>
            <h2 id='title'>Table</h2>
            <table align= "center"id='students'>
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