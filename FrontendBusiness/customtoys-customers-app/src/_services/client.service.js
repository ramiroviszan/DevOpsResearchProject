import config from 'config';
import { authHeader } from '../_helpers';

export const clientService = {
    register,
    getAll,
    getById
};

function register(client) {
    console.log("ESTOY EN EL SERVICIO DE CLIENTE HACIENDO EL REGISTERRRRR");
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(client)
    };

    //return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
    return fetch(`${config.apiUrl}/clients/register`, requestOptions).then(handleResponse);
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    //return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
    return fetch(`${config.apiUrl}/clients`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    //return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
    return fetch(`${config.apiUrl}/clients/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    console.log("ESTOY HANDLEANDO LA RESPONSEE SABLEO");
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                console.log("ENTRE AL LOGOUTTTTT");
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        else
            console.log("LA RESPONSE FUE TODO OK SABLEO");

        return data;
    });
}