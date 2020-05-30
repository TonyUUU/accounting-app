import React, { Component } from "react";
import EntryService from "../service/EntryService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    date: Yup.date()
        .required('Required'),
    entryName: Yup.string()
        .required('Required'),
    amount: Yup.number()
        .min(0, 'Invalid Amount')
        .required('Required')
})

class EntryComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: this.props.match.params.id,
            date: '',
            entryName: '',
            amount: 0
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.cancelClicked = this.cancelClicked.bind(this);
    }

    componentDidMount() {
        console.log(this.state.id);

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        EntryService.retrieveEntry(this.state.id)
            .then(response => {
                this.setState({
                    date: response.data.date,
                    entryName: response.data.entryName,
                    amount: response.data.amount
                })
                console.log(this.state);
            })
    }

    onSubmit(values) {
        let entry = {
            id: this.state.id,
            date: values.date,
            entryName: values.entryName,
            amount: values.amount
        }

        if (Number(this.state.id) === -1) {
            EntryService.createEntry(entry)
                .then((response) => {
                    console.log(response)
                    this.props.history.push('/entries')
                })
        } else {
            EntryService.updateEntry(this.state.id, entry)
                .then(() => this.props.history.push('/entries'))
        }

        console.log(values);
    }

    cancelClicked() {
        this.props.history.push('/entries');
    }

    render() {
        let { id, date, entryName, amount } = this.state;
        //eslint-disable-next-line
        let header = id == -1 ? 'New Entry' : `Entry Details: ${id}`;
        return (
            <div>
                <h3>{header}</h3>
                <div className="container">
                    <Formik 
                        initialValues={{ date: date, entryName: entryName, amount: amount }}
                        enableReinitialize={true}
                        validationSchema={validationSchema}
                        //validateOnBlur={false}
                        validateOnChange={false}
                        
                        onSubmit={this.onSubmit}>
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Date</label>
                                        <Field className="form-control" type="date" name="date" />
                                        <ErrorMessage name="date" component="div" className="alert alert-warning" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="entryName" />
                                        <ErrorMessage name="entryName" component="div" className="alert alert-warning" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>Amount</label>
                                        <Field className="form-control" type="number" name="amount" />
                                        <ErrorMessage name="amount" component="p" className="alert alert-warning" />
                                    </fieldset>

                                    <div className="btn-toolbar">
                                        <div className="btn-group mr-2">
                                            <button className="btn btn-success" type="submit">Save</button>
                                        </div>
                                        <div className="btn-group mr-2">
                                            <button className="btn btn-success" 
                                                onClick={
                                                    () => this.cancelClicked()
                                            }>
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        );
    }
}

export default EntryComponent;