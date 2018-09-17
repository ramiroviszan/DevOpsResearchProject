import { clientConstants } from '../_constants';
import { clientService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const clientActions = {
    register,
    getAll
};

function register(client) {
    console.log("ENTRE AL REGISTER DE CLIENTTT");
    return dispatch => {
        console.log("ESTOY UNA LINEA ANTES DEL dispatch(request(client))");
         dispatch(request(client));
        console.log("ESTOY UNA LINEA ANTES DEL CLIENTSERVICE.REGISTER");
        clientService.register(client)
            .then(
                client => { 
                    console.log("ESTOY EN EL DISPATCH SUCCESS");
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(client) { return { type: clientConstants.REGISTER_REQUEST, client } }
    function success(client) { return { type: clientConstants.REGISTER_SUCCESS, client } }
    function failure(error) { return { type: clientConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        clientService.getAll()
            .then(
                clients => dispatch(success(clients)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: clientConstants.GETALL_REQUEST } }
    function success(clients) { return { type: clientConstants.GETALL_SUCCESS, clients } }
    function failure(error) { return { type: clientConstants.GETALL_FAILURE, error } }
}