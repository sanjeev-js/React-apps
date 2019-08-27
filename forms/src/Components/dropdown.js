import React, { Component } from 'react';
// import DynamicSelect from './select';

const school = [{id: '1 - Sbv', name: 'Sbv'},
  {id: '2 - Skv',name: 'Skv'},
  {id: '3 - Dps',name: 'Dps'}];


class Select extends Component{
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
                <option>Select School</option>
                {options}
           </select>
        )
    }
}

class DropDown extends Component {
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
          <Select arrayOfData={school} onSelectChange={this.handleSelectChange} /> <br /><br />
      </div>
    );
  }
}

export default DropDown;
