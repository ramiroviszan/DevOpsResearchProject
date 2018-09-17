import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { clientActions } from '../_actions';
import { userActions } from '../_actions';

class CreateProjectPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(clientActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(clientActions.delete(id));
    }

    showObject(obj) {
        if (obj) {
            const j = Object.values(obj);
            var journalEntries = "";

            for (var i = 0; i < j.length; i++) {
                journalEntries += j + " - ";
            }

            return journalEntries;
        }
        return obj;
    }

    render() {
        return(<div>Create Project</div>)
        /*const { user, clients } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1 className='test'>Hi {user.username}!</h1>
                <p>You're logged in with React!!</p>
                <h3>All registered clients:</h3>
                {clients.loading && <em>Loading clients...</em>}
                {clients.error && <span className="text-danger">ERROR: {clients.error}</span>}
                {clients.items &&
                    <ul>
                        {clients.items.map((client, index) =>
                            <li key={client.id}>
                                {"Nombre de usuario: " + client.username}
                                <br />
                                {"Empresa: " + client.client_company}
                                <br />
                                {"Fecha de entrada: " + client.entry_date}
                                <br />
                                {"RUT: " + client.rut}
                                <br />
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
    const { user } = authentication;
    return {
        user,
        clients
    };
}

const connectedCreateProjectPage = connect(mapStateToProps)(CreateProjectPage);
export { connectedCreateProjectPage as CreateProjectPage };