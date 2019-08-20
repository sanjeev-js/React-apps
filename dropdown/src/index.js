import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


class Userdetails extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Orders'};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    render() {
      return (
        <form>
        <label>
                User Info:- 
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Orders">Orders</option>
              <option value="Addresses">Your Address</option>
              <option value="Bank Account">Bank Account</option>
              <option value="Documents">Documents</option>
            </select>
            </label>
            <label>
                User Documents:-
            <select value={this.state.value} onChange={this.handleChange}>
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