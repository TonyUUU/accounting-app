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
        this.addEntryClicked = this.addEntryClicked.bind(this);
        this.updateEntryClicked = this.updateEntryClicked.bind(this);
        this.deleteEntryClicked = this.deleteEntryClicked.bind(this);
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

    addEntryClicked() {
        this.props.history.push('/entries/-1');
    }

    updateEntryClicked(id) {
        console.log('update' + id);
        this.props.history.push(`/entries/${id}`);
    }

    deleteEntryClicked(id) {
        EntryService.deleteEntry(id)
            .then(
                responce => {
                    console.log(responce);
                    this.setState({message: `Delete of entry ${id} Successful`})
                    this.refreshEntries();
                }
            )
    }

    render() {
        return (
            <div className="Container">
                <h3>All Records</h3>
                {this.state.message && 
                    <div className="alert alert-success">{this.state.message}</div>
                }
                <div className="Container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Update</th>
                                <th>Delete</th>
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
                                            <td>
                                                <button className="btn btn-success"
                                                    onClick={
                                                        () => this.updateEntryClicked(entry.id)
                                                }>
                                                    Update
                                                </button>
                                            </td>
                                            <td>
                                                <button className="btn btn-warning"
                                                    onClick={
                                                        () => this.deleteEntryClicked(entry.id)
                                                }>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                    <div className="row">
                        <button className="btn btn-success" 
                            onClick={
                                () => this.addEntryClicked()
                            }>
                                Add
                            </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListEntryComponent;