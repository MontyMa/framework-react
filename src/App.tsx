import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import {Link} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/test'>Test</Link>
        </div>
    );
}

export default App;
