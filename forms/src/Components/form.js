import React from 'react';
import Dropdown from './dropdown';
import RadioButtons from './radioButton';
import CheckboxContainer from './checkBox';
import Input from './input';

class Form extends React.Component{
    constructor (props) {
        super(props);

    this.state = {postData : { name : '', email : '', phone : '', school : [], wantToStudy : '',  documents : [] } }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let userData = this.state.postData;
        this.setState ( { postData : userData })
    }
    
    render() {
        return (
            <div>
            <Input />
            <Dropdown />
            <RadioButtons />
            <CheckboxContainer /> 
            <input type="submit" value="Submit" onChange={this.handleFormSubmit} />
            </div> 
        )
    }
}
export default Form;