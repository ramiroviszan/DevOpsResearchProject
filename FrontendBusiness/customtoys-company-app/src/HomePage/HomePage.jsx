import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

import './styles.css';

class HomePage extends React.Component {
    componentDidMount() {
        //this.props.dispatch(userActions.getAll());
    }

    render() {
        //const { user } = this.props;
        return (
            <div>
                <div className="welcomeMsg">
                    <p>Bienvenido/a {/*user.username*/}!</p>
                </div>

                <div className="container gray highlightTextIn">
                    
                    <Link to="/Register" className="link" alt="Crear Cliente">Crear Cliente</Link>
                    <Link to="/createProject" className="link" alt="Crear Proyecto">Crear Proyecto</Link>
                </div>

                <div className="welcomeMsg">
                    <p>
                        <Link to="/login">Logout</Link>
                    </p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };