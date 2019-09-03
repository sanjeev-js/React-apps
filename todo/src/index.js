import React from 'react';
import ReactDOM from 'react-dom';

class TodoApp extends React.Component {
    constructor (props) {
        super (props);
        this.state = {items: [], text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

render() {
    return (
        <div>
            <h3>TODO</h3>
            <TodoList items = {this.state.items} />
            <form onSubmit = {this.handleSubmit} >
            <label>What's needs to be Do?</label>
            <input onChange = {this.handleChange} value = {this.state.text} />
            <button>ADD </button>
            </form>
        </div>
        );
    }

    handleChange (e) {
        this.setState ({text: e.target.value});
    }

    handleSubmit (e) {
        e.preventDefault();
        if (! this.state.text.length) {
            return;
        }
        const newItem = {
            text : this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }

    handleEdit = (e) => {
    }

    handleComplete = (e) => {

    }
}

class TodoList extends React.Component {
    render() {
        return (
            <ul>
            {this.props.items.map(item => (
            <div>
            <li key={item.id}>{item.text}</li>
            <button onClick = {this.handleEdit}>Edit</button>
            <button onClick = {this.handleComplete}>Complete</button>
            </div>
            ))}
            </ul>
        );
    }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));
