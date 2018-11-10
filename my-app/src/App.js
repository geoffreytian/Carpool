import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

class UserButton extends Component{
    render(){
        return(
            <Button className="button" onClick={() => {window.location = 'http://www.google.com'}} variant="contained" color="primary">
                Drivers
            </Button>
        )
    }
}

class App extends Component {

    renderButton() {
        return (
            <UserButton/>
        );
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {this.renderButton()}
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
