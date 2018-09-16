import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class RegisterPage extends React.Component {    
    constructor(props) {
        super(props);

        this.state = {
            client: {
                username: '',
                password: '',
                client_company: '',
                entry_date: '',
                rut: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { client } = this.state;
        this.setState({
            client: {
                ...client,
                [name]: value
            }
        });
    }

    fieldsCompleted(){
        const { client } = this.state;

        let completed = false;
        completed &= client.username;
        completed &= client.password;
        completed &= client.client_company;
        completed &= client.entry_date;

        return completed;
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { client } = this.state;
        const { dispatch } = this.props;
        if (fieldsCompleted()) {
            dispatch(userActions.register(client));
        }
    }

    render() {
        const { registering  } = this.props;
        const { client, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !client.username ? ' has-error' : '')}>
                        <label htmlFor="username">Nombre de Usuario</label>
                        <input type="text" className="form-control" name="username" value={client.username} onChange={this.handleChange} />
                        {submitted && !client.username &&
                            <div className="help-block">Debe ingresar un nombre de usuario</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !client.password ? ' has-error' : '')}>
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" className="form-control" name="password" value={client.password} onChange={this.handleChange} />
                        {submitted && !client.password &&
                            <div className="help-block">Debe ingresar una contraseña</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !client.client_company ? ' has-error' : '')}>
                        <label htmlFor="client_company">Nombre de la Empresa Cliente</label>
                        <input type="text" className="form-control" name="client_company" value={client.client_company} onChange={this.handleChange} />
                        {submitted && !client.client_company &&
                            <div className="help-block">Debe ingresar un nombre para la empresa cliente</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !client.entry_date ? ' has-error' : '')}>
                        <label htmlFor="entry_date">Password</label>
                        <input type="date" className="form-control" name="entry_date" value={client.entry_date} onChange={this.handleChange} />
                        {submitted && !client.entry_date &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        {registering && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };