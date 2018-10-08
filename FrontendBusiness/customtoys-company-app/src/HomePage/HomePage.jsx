import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

import './styles.css';
import { HomeHTML } from './HomeHTML';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    render() {
        const { user } = this.props;
        return (
            <div>
                <div className="welcomeMsg">
                    <p>Bienvenido/a {(user) ? user.username : ''}!</p>
                </div>

                <HomeHTML />
                
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