import React from 'react';
import axios from 'axios';
import DataTable from './dataTable';

class Result extends React.Component {

    constructor(props) {
        super(props);
        this.state = { contactsCollection: [] };
    }

    componentDidMount() {
        axios.get('/getdata')
            .then(res => {
                this.setState({ contactsCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.contactsCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Message</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Result;