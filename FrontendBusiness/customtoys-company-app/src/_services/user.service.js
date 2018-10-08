//import config from 'config';
import config from '../config'
import { authHeader } from '../_helpers';

export const userService = {
    getToken,
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

function getToken(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': 'd774f026-6243-4a14-9696-051329f82987',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    };
    return fetch(`${config.ENTERPRISE_AUTH_API_URL}`, requestOptions).then(handleResponse);
}

function login(username, password, value) {
    const loginRequestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    return fetch(`${config.apiUrl}/api/login/enterprise`, loginRequestOptions)
        .then(handleResponse)
        .then(user => {
            user = {
                "username": username,
                "password": password,
                "token": value.token
            };
            // login successful if there's a jwt token in the response
            if (user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out

    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        if (text == "Not Found")
            return Promise.reject("Datos Incorrectos");
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