import React from 'react';

class RadioButtons extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOption: ''
    };
  this.radioChange = this.radioChange.bind(this);
}

  radioChange(e) {
    this.setState({
      selectedOption: e.currentTarget.value
    });
  }
  
  render() {
    return (
      <div>
        
        <input type="radio"
               value="Yes"
               checked={this.state.selectedOption === "Yes"}
               onChange={this.radioChange} />Yes

        <input type="radio"
               value="No"
               checked={this.state.selectedOption === "No"}
               onChange={this.radioChange}/>No
        <h4>Do You Want to Study More? : {this.state.selectedOption}</h4>
      </div> 
    );
  }
}

export default RadioButtons;