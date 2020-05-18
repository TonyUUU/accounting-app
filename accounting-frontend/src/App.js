import React, { Component } from "react";
import './App.css';
import EntryApp from "./component/EntryApp";

class App extends Component {
    render() {
        return (
            <div className="container">
                <EntryApp />
            </div>
        );
    }
}

export default App;