//import config from 'config';
import config from '../config'
import { authHeader } from '../_helpers';
import { parseBackendError } from '../_helpers'

export const projectService = {
    register,
    getAll,
    getClientProjects
};

function filterProjectInformation(project) {
    const projecetFiltered = {
        'name': project.name,
        'start-date': project.start_date,
        'end-date': project.end_date,
        'company': project.company_name
    }
    return projecetFiltered;
}

function register(project) {
    const projectInfo = filterProjectInformation(project);
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(projectInfo)
    };
    return fetch(`${config.apiUrl}/api/projects`, requestOptions).then(handleResponse);
}


function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/projects`, requestOptions).then(handleResponse);
}

function getClientProjects(idClient) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/client/${idClient}/projects`, requestOptions).then(handleResponse);
}

function logout() {
    // remove user from local storage to log user out

    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.text().then(text => {
        try {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                    logout();
                    window.location.reload(true);
                }

                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            return data;
        }
        catch (e) {
            const error = parseBackendError(text);
            return Promise.reject(error);
        }
    });
}