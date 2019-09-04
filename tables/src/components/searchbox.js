import React from 'react';
import './search.css'
  
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      searchString: this.refs.search.value
    });
  }

  render() {
    return (
      <div>
        <input
            type="text"
            value={this.state.searchString}
            ref="search"
            onChange={this.handleChange}
            placeholder="type name here"
          />
        </div>
    );
  }
}

export default Search;