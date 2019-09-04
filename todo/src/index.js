import React from "react";
import ReactDOM from "react-dom";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "", editItemId: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} handleEdit={this.handleEdit} handleComplete = {this.handleComplete} />
        <form onSubmit={this.handleSubmit}>
          <label>What's needs to be Do?</label>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>ADD </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    if (this.state.editItemId !== null) {
      var elem = this.state.items.find(
        e => this.state.editItemId === e.id
      );
      var elemIndex = this.state.items.indexOf(elem);
      var newItems = this.state.items.slice();
      var newItem = {
        ...elem,
        text: this.state.text
      };

      newItems[elemIndex] = newItem;
      this.setState({ items: newItems });
    } else {
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ""
      }));
    }
  }

  handleEdit = (e, id) => {
    var editableItem = this.state.items.find(element => element.id === id);
    this.setState({ text: editableItem.text, editItemId: editableItem.id });
  };

  handleComplete = (e, id) => {
    var CompletedItems = this.state.items.find (element => element.id === id);
    var DeletedItem = CompletedItems;

  };
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <div>
            <li key={item.id}>{item.text}</li>
            <button onClick={e => this.props.handleEdit(e, item.id)}>
              Edit
            </button>
            <button onClick={e => this.props.handleComplete(e, item.id)}>Complete</button>
          </div>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("root"));
