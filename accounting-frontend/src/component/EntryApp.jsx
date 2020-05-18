import React, { Component } from 'react';
import ListEntryComponent from './ListEntryComponent';

class EntryApp extends Component {
    render() {
        return (
            <>
                <h1>Instructor Application</h1>
                <ListEntryComponent/>
            </>
        );
    }
}

export default EntryApp;