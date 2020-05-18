import React, { Component } from "react";
import EntryService from "../service/EntryService";

class ListEntryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: [],
            message: null
        }
        this.refreshEntries = this.refreshEntries.bind(this);
    }

    componentDidMount() {
        this.refreshEntries();
    }

    refreshEntries() {
        EntryService.retrieveAllEntries()
            .then(
                responce => {
                    console.log(responce);
                    this.setState({entries: responce.data});
                }
            )
    }

    render() {
        return (
            <div className="Container">
                <h3>All Records</h3>
                <div className="Container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.entries.map(
                                    entry => 
                                        <tr key={entry.id}>
                                            <td>{entry.id}</td>
                                            <td>{entry.date}</td>
                                            <td>{entry.entryName}</td>
                                            <td>{entry.amount}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEntryComponent;