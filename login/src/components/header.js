import React from 'react';
import './header.css'

class Header extends React.Component {
    render () {
        return (
            <div className = 'header'>
                <header>
                   <button>Home</button>
                   <button>Reports</button>
                   <button>Username</button>
                </header>
            </div>
        )
    }
}

export default Header;