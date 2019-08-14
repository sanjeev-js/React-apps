import React from 'react';

const App = (props) => {
    return (
        <form onSubmit={props.loadWeather}>
            <input type="text" name="city" placeholder="City..." />
            <button>Get Weather</button>
        </form>
    )
}


export default App;
