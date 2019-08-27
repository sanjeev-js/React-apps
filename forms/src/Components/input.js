import React from 'react';

class Input extends React.Component {
    constructor(props){
      super(props);
      this.state = { name: '', email: '', phone : '' };
    }
   
    handleChange = ({ target }) => {
       this.setState({ [target.name]: target.value, [target.email] : target.value, [target.phone] : target.value});
    };
   
    render() {
      return (
        <div>
          <form>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}/>
              <br />
   
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}/>
              <br />

            <label htmlFor="Phone">Phone</label>
            <input
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
        
          </form>
        </div>
      );
    }
}
  
export default Input;