import React from 'react';
import ReactDOM from 'react-dom';

class Userdetails extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
    }
    if (select.name === "Acocunt") {
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    }

    render() {
      return (
        <form>
          <label>
            User Info:- 
            <select value={this.state.value} onChange={this.handleChange} name = "Account">
              <option ></option>
              <option value="Orders">Orders</option>
              <option value="Addresses">Your Address</option>
              <option value="Bank Account">Bank Account</option>
              <option value="Documents">Documents</option>
            </select>
          </label>
          <label>
            User Documents:-
            <select name="Documents" value={this.state.value} onChange={this.handleChanges}>
              <option></option>
              <option value="Aadhar">Aadhar</option>
              <option value="Pan Card">Pan Card</option>
              <option value="Driving Lisence">Driving Lisence</option>
              <option value="Voter Id Card">Voter Id Card</option>
            </select>
          </label>
        </form>
      );
    }
  }

ReactDOM.render(<Userdetails />, document.getElementById('root'));