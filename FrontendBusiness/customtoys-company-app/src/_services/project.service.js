import config from 'config';
import { authHeader } from '../_helpers';

export const projectService = {
    register,
    getAll,
    getClientProjects
};

function register(project) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project)
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
    });
}