import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { clientActions, projectActions } from '../_actions';

class CreateProjectPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            project: {
                _id: '',
                name: '',
                start_date: '',
                end_date: '',
                id_client: ''
            },
            selectedOption: null,
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(clientActions.getAll());
    }

    /*handleDeleteUser(id) {
        return (e) => this.props.dispatch(clientActions.delete(id));
    }*/

    handleClient(selectedOption) {
        const { project } = this.state;
        if (selectedOption) {
            this.setState({
                selectedOption,
                project: {
                    ...project,
                    id_client: selectedOption.value
                }
            });
        }
    }

    handleChange(event) {
        if (event.target) {
            const { name, value } = event.target;
            const { project } = this.state;
            this.setState({
                project: {
                    ...project,
                    [name]: value
                }
            });
        }
        else
            this.handleClient(event);
    }

    fieldsCompleted() {
        const { project } = this.state;

        let completed = true;
        completed &= project.name.trim() != "";
        completed &= project.start_date.trim() != "";
        completed &= project.end_date.trim() != "";
        completed &= project.id_client.trim() != "";

        return completed;
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { project } = this.state;
        const { dispatch } = this.props;
        if (this.fieldsCompleted())
            dispatch(projectActions.register(project));

    }

    render() {
        const { registering, clients } = this.props;
        const { project, submitted, selectedOption } = this.state;
        const optionItems = [];

        if (clients && clients.items) {
            clients.items.map((client, index) =>
                optionItems.push({
                    value: client._id, label: "Id del cliente: " + client._id
                })
            );
        }
        
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Crear Proyecto</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !project.name ? ' has-error' : '')}>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" className="form-control" name="name" value={project.name} onChange={this.handleChange} />
                        {submitted && !project.name &&
                            <div className="help-block">Debe ingresar un nombre al proyecto</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !project.start_date ? ' has-error' : '')}>
                        <label htmlFor="start_date">Fecha de Inicio</label>
                        <input type="date" className="form-control" name="start_date" value={project.start_date} onChange={this.handleChange} />
                        {submitted && !project.start_date &&
                            <div className="help-block">Debe ingresar una fecha de inicio</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !project.end_date ? ' has-error' : '')}>
                        <label htmlFor="end_date">Fecha de Fin</label>
                        <input type="date" className="form-control" name="end_date" value={project.end_date} onChange={this.handleChange} />
                        {submitted && !project.end_date &&
                            <div className="help-block">Debe ingresar una fecha de fin</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !project.id_client ? ' has-error' : '')}>
                        <label htmlFor="id_client">Seleccione un cliente</label>
                        <Select
                            placeholder="Seleccione un cliente"
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={optionItems}
                        />
                        {submitted && !project.id_client &&
                            <div className="help-block">Debe seleccionar un cliente</div>
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
    const { clients, authentication } = state;
    const { registering } = state.registration;
    const { user } = authentication;
    return {
        user,
        clients,
        registering
    };
}

const connectedCreateProjectPage = connect(mapStateToProps)(CreateProjectPage);
export { connectedCreateProjectPage as CreateProjectPage };