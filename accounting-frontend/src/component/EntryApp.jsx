import React, { Component } from 'react';
import ListEntryComponent from './ListEntryComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EntryComponent from './EntryComponent';

class EntryApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Accounting Application</h1>
                    <Switch>
                        <Route exact path="/" component={ListEntryComponent} />
                        <Route exact path="/entries" component={ListEntryComponent} />
                        <Route path="/entries/:id" component={EntryComponent} />
                    </Switch>
                </>
            </Router>
        );
    }
}

export default EntryApp;