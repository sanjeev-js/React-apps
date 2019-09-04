import React from 'react';
import './footer.css'

class Footer extends React.Component {
    render () {
        return (
            <div className = 'footer'>
                <footer className = 'prop'>
                    <button>Home</button>   
                    <button>Reports</button>
                </footer>
            </div>
        )
    }
}

export default Footer;