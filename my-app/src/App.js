import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
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
                </header>
            </div>
        );
    }
}

export default App;
