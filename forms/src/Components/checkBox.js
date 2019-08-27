import React from 'react';
import PropTypes from 'prop-types';

const checkboxes = [
    {
      name: 'Pan Card',
      key: 'checkBox1',
      label: 'Check Box 1',
    },
    {
      name: 'Aadhar Card',
      key: 'checkBox2',
      label: 'Check Box 2',
    }]
    
const Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => (
    <input type={type} name={name} checked={checked} onChange={onChange} />);
    Checkbox.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
}

class CheckboxContainer extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        checkedItems: new Map(),
      }
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      const item = e.target.name;
      const isChecked = e.target.checked;
      this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    }
  
    render() {
      return (
            checkboxes.map(item => (
              <label key={item.key}>
                {item.name}
                <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange}>
                </Checkbox>
              </label>
            ))
        );
    }
}
  
export default CheckboxContainer;