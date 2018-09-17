import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { clientActions } from '../_actions';

class CreateProjectPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(clientActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(clientActions.delete(id));
    }
    render() {
        const { client, clients } = this.props;
        return(<div>Create Project Page</div>);
        /*return (
            <div className="col-md-6 col-md-offset-3">
                <h1 className='test'>Hi {client.firstName}!</h1>
                <p>You're logged in with React!!</p>
                <h3>All registered clients:</h3>
                {clients.loading && <em>Loading clients...</em>}
                {clients.error && <span className="text-danger">ERROR: {clients.error}</span>}
                {clients.items &&
                    <ul>
                        {clients.items.map((client, index) =>
                            <li key={client.id}>
                                {client.firstName + ' ' + client.lastName}
                                {
                                    client.deleting ? <em> - Deleting...</em>
                                        : client.deleteError ? <span className="text-danger"> - ERROR: {client.deleteError}</span>
                                            : <span> - <a onClick={this.handleDeleteUser(client.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );*/
    }
}

function mapStateToProps(state) {
    const { clients, authentication } = state;
    const { client } = authentication;
    return {
        client,
        clients
    };
}

const connectedCreateProjectPage = connect(mapStateToProps)(CreateProjectPage);
export { connectedCreateProjectPage as CreateProjectPage };