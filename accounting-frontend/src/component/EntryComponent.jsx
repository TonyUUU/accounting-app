import React, { Component } from "react";
import EntryService from "../service/EntryService";

class EntryComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: this.props.match.params.id,
            date: 'NA',
            entryName: 'NA',
            amount: 0
        }
    }

    componentDidMount() {
        console.log(this.state.id);

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        EntryService.retrieveEntry(this.state.id)
            .then(response => this.setState({
                date: response.data.date,
                entryName: response.data.entryName,
                amount: response.data.amount
            }))
        
        console.log(this.state.entry);
    }

    render() {
        let { id, date, entryName, amount } = this.state;
        return (
            <div>
                <h3>Entry Details: ${id}</h3>
                <div>{date}</div>
                <div>{entryName}</div>
                <div>{amount}</div>
            </div>
        );
    }
}

export default EntryComponent;