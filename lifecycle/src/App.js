import React from 'react';

class App extends React.Component {

    constructor(props) {
       super(props);
           console.clear();
       this.state = {
          data: 0
       }
 
       this.setNewNumber = this.setNewNumber.bind(this)
    };
 
    setNewNumber() {
       this.setState({data:this.state.data + 1})
    }
 
    render() {
       return (
          <div>
             <button onClick = {this.setNewNumber}>INCREMENT</button>
             <Content myNumber = {this.state.data}></Content>
          </div>
       );
    }
 }
 
 class Content extends React.Component {
 
    componentWillMount() {
       console.log('Component WILL MOUNT!')
    }
 
    componentDidMount() {
       console.log('Component DID MOUNT!')
    }
 
    componentWillReceiveProps(newProps) {    
       console.log('Component WILL RECIEVE PROPS!', newProps)
    }
 
    shouldComponentUpdate(newProps, newState) {
      console.log(newProps, newProps.myNumber <= 10)
       return newProps.myNumber <= 10;
    }
 
    componentWillUpdate(nextProps, nextState) {
       console.log('Component WILL UPDATE!');
    }
 
    componentDidUpdate(prevProps, prevState) {
       console.log('Component DID UPDATE!', prevProps, prevState)
    }
 
    componentWillUnmount() {
       console.log('Component WILL UNMOUNT!')
    }
     
    render() {
       return (
          <div>
             <h3>{this.props.myNumber}</h3>
          </div>
       );
    }
 }
 

export default App;