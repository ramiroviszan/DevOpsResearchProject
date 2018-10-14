import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

import { HomeHTML } from './HomePageTemplate/HomeHTML.jsx';

class HomePage extends React.Component {
    constructor(props){
        super(props);
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