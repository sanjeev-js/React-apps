import React from "react";
import ReactDOM from "react-dom";

class DemoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your Name is : ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <p>This is an simple page which is rendering a p tag, an imgae and takes one input and gives alert.</p>
        <img src = 'https://d1yn1kh78jj1rr.cloudfront.net/image/thumbnail/rGMF3jSims9o98x/storyblocks-sunset-over-rocky-sea-coast_H8ogAvuyf_thumb.jpg' />
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

ReactDOM.render(<DemoPage />, document.getElementById('root'));
