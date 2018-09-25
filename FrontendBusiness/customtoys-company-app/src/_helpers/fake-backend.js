// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users')) || [];
let clients = JSON.parse(localStorage.getItem('clients')) || [];
let projects = JSON.parse(localStorage.getItem('projects')) || [];

function authenticate(opts, reject, resolve) {
    // get parameters from post request
    let params = JSON.parse(opts.body);

    // find if any user matches login credentials
    let filteredUsers = users.filter(user => {
        return user.username === params.username && user.password === params.password;
    });

    if (filteredUsers.length) {
        // if login details are valid return user details and fake jwt token
        let user = filteredUsers[0];
        let responseJson = {
            id: user.id,
            username: user.username,
            token: 'fake-jwt-token'
        };
        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
    } else {
        // else return error
        reject('Datos incorrectos');
    }

    return;
}

function getUsers(opts, reject, resolve) {
    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users)) });
    } else {
        // return 401 not authorised if token is null or invalid
        reject('Unauthorised');
    }

    return;
}

function getClients(opts, reject, resolve) {
    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(clients)) });
    } else {
        // return 401 not authorised if token is null or invalid
        reject('Unauthorised');
    }

    return;
}

function getUserById(url, opts, reject, resolve) {
    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
        // find user by id in users array
        let urlParts = url.split('/');
        let id = parseInt(urlParts[urlParts.length - 1]);
        let matchedUsers = users.filter(user => { return user.id === id; });
        let user = matchedUsers.length ? matchedUsers[0] : null;

        // respond 200 OK with user
        resolve({ ok: true, text: () => JSON.stringify(user) });
    } else {
        // return 401 not authorised if token is null or invalid
        reject('Unauthorised');
    }

    return;
}

function getClientById(url, opts, reject, resolve) {
    // check for fake auth token in header and return client if valid, this security is implemented server side in a real application
    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
        // find client by id in client array
        let urlParts = url.split('/');
        let id = parseInt(urlParts[urlParts.length - 1]);
        let matchedUsers = clients.filter(client => { return client.id === id; });
        let client = matchedUsers.length ? matchedUsers[0] : null;

        // respond 200 OK with client
        resolve({ ok: true, text: () => JSON.stringify(client) });
    } else {
        // return 401 not authorised if token is null or invalid
        reject('Unauthorised');
    }

    return;
}

function registerUser(opts, reject, resolve) {
    // get new user object from post body
    let newUser = JSON.parse(opts.body);

    // validation
    let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
    if (duplicateUser) {
        reject('Nombre de usuario: "' + newUser.username + '" ya fue registrado');
        return;
    }

    // save new user
    newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // respond 200 OK
    resolve({ ok: true, text: () => Promise.resolve() });

    return;
}

function registerClient(opts, reject, resolve) {
    // get new client object from post body
    let newClient = JSON.parse(opts.body);

    // validation
    let duplicateUser = clients.filter(client => { return client.username === newClient.username; }).length;
    if (duplicateUser) {
        reject('Nombre de usuario:  "' + newClient.username + '" ya fue registrado');
        return;
    }

    // save new client
    newClient.id = clients.length ? Math.max(...clients.map(client => client.id)) + 1 : 1;
    clients.push(newClient);
    localStorage.setItem('clients', JSON.stringify(clients));

    // respond 200 OK
    resolve({ ok: true, text: () => Promise.resolve() });

    return;
}

function registerProject(opts, reject, resolve) {
    // get new project object from post body
    let newProject = JSON.parse(opts.body);

    // validation
    let duplicateProject = projects.filter(project => { return project._id === newProject._id; }).length;
    if (duplicateProject) {
        reject('Proyecto con id:  "' + newProject._id + '" ya fue registrado');
        return;
    }

    // save new project
    newProject._id = projects.length ? Math.max(...projects.map(project => project._id)) + 1 : 1;
    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));

    // respond 200 OK
    resolve({ ok: true, text: () => Promise.resolve() });

    return;
}

function deleteUser(url, opts, reject, resolve) {
    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
        // find user by id in users array
        let urlParts = url.split('/');
        let id = parseInt(urlParts[urlParts.length - 1]);
        for (let i = 0; i < users.length; i++) {
            let user = users[i];
            if (user.id === id) {
                // delete user
                users.splice(i, 1);
                localStorage.setItem('users', JSON.stringify(users));
                break;
            }
        }

        // respond 200 OK
        resolve({ ok: true, text: () => Promise.resolve() });
    } else {
        // return 401 not authorised if token is null or invalid
        reject('Unauthorised');
    }

    return;
}

function resetUser() {
    const user = {
        username: "admin",
        password: "admin",
        token: "fake-jwt-token"
    };
    let users = [user];
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('clients', JSON.stringify([]));
    localStorage.setItem('projects', JSON.stringify([]));
}

export function configureFakeBackend(reset) {
    if (reset)
        resetUser();
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                // authenticate
                if (url.endsWith('/api/login/company') && opts.method === 'POST')
                    return authenticate(opts, reject, resolve);

                // get users
                if (url.endsWith('/users') && opts.method === 'GET') {
                    return getUsers(opts, reject, resolve);
                }

                //get clients
                if (url.endsWith('/api/clients') && opts.method === 'GET') {
                    return getClients(opts, reject, resolve);
                }

                // get user by id
                if (url.match(/\/api\/users\/\d+$/) && opts.method === 'GET') {
                    return getUserById(url, opts, reject, resolve);
                }

                // get client by id
                if (url.match(/\/api\/clients\/\d+$/) && opts.method === 'GET') {
                    return getClientById(url, opts, reject, resolve);
                }

                // register user
                if (url.endsWith('/users/register') && opts.method === 'POST') {
                    return registerUser(opts, reject, resolve);
                }

                // register client
                if (url.endsWith('/api/clients') && opts.method === 'POST') {
                    return registerClient(opts, reject, resolve);
                }

                // register project
                if (url.endsWith('/api/projects') && opts.method === 'POST') {
                    return registerProject(opts, reject, resolve);
                }

                // delete user
                if (url.match(/\/users\/\d+$/) && opts.method === 'DELETE') {
                    return deleteUser(url, opts, reject, resolve);
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}