import React from 'react';
import './style.css';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" style = {{background:"Red",width:"200px"}} >
         <div className="button" onClick={this.showDropdownMenu}> User Info</div>

          { this.state.displayMenu ? (
          <ul>
         <li><a className="active" href="#Orders">Orders</a></li>
         <li><a href="#Payment Details">Payment Details</a></li>
         <li><a href="#Your Address">Your Address</a></li>
         <li><a href="#Your Profile">Profile</a></li>
         <li><a href="#Activity">Activity</a></li>
         <li><a href="#Setting">Setting</a></li>
         <li><a href="#Log Out">Log Out</a></li>
          </ul>
        ):
        (
          null
        )
        }
       </div>
    );
  }
}

export default Dropdown;