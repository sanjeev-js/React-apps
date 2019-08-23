import React, { Component } from 'react';
// import DynamicSelect from './select';

const arrayOfData = [{id: '1 - Jerry', name: 'Jerry'},
  {id: '2 - Elaine',name: 'Elaine'},
  {id: '3 - Kramer',name: 'Kramer'},
  {id: '4 - George',name: 'George'}];

const doucments = [{id: '1 - Aadhar', name: 'Aadhar'},
    {id: '2 - Pan Card', name: 'Pan Card'},
    {id: '3 - Voter Id Card', name: 'Voter Id Card'}];

class Select extends Component{
    //On the change event for the select box pass the selected value back to the parent
    handleChange = (event) =>{
        let selectedValue = event.target.value;
        this.props.onSelectChange(selectedValue);
    }
    render(){
        let arrayOfData = this.props.arrayOfData;
        let options = arrayOfData.map((data) =>
          <option key={data.id} value={data.id}> {data.name} </option>);
          return (
            <select onChange={this.handleChange}>
                <option>Select Item</option>
                {options}
           </select>
        )
    }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedValue: ''
    }
  }

  handleSelectChange = (selectedValue) =>{
    this.setState({
      selectedValue: selectedValue
    });
  }

  render() {
    return (
      <div className="App">
          <h1>Select Dropdown List</h1>
          <Select arrayOfData={doucments} onSelectChange={this.handleSelectChange} /> <br /><br />
          <Select arrayOfData={arrayOfData} onSelectChange={this.handleSelectChange} /> <br /><br />
          <div>
            Selected value: {this.state.selectedValue}
          </div>
      </div>
    );
  }
}

export default App;
