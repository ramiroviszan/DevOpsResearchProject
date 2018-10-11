//import config from 'config';
import config from '../config'
import { authHeader } from '../_helpers';

export const clientService = {
    register,
    update,
    getAll,
    getById
};

function register(client) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({'company_name':client.company_name, 'entry_date':client.entry_date})
    };

    return fetch(`${config.apiUrl}/api/clients`, requestOptions)
    .then(handleResponse)
    .then(id => {
        if(id)
        {
            client.id = id;
            saveUser(client);
        }
        else
            return Promise.reject("Error al crear el cliente");
    });
}

function saveUser(client)
{
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'user_name': client.username,
            'password': client.password,
            'id_client': client.id
        })
    };

    return fetch(`${config.apiUrl}/api/register/client`, requestOptions).then(handleResponse)
}

function update(client) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(client)
    };

    return fetch(`${config.apiUrl}/api/client/${client.id}`, requestOptions).then(handleResponse);
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/clients`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/clients/${id}`, requestOptions).then(handleResponse);
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
        catch(e)
        {
            return Promise.reject(text);
        }
    });
}