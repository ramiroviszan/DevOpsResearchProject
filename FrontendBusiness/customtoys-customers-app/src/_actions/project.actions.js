import { projectConstants } from '../_constants';
import { projectService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const projectActions = {
    register
};

function register(project) {
    return dispatch => {
        dispatch(request(project));

        projectService.register(project)
            .then(
                project => {
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

    function request(project) { return { type: projectConstants.REGISTER_REQUEST, project } }
    function success(project) { return { type: projectConstants.REGISTER_SUCCESS, project } }
    function failure(error) { return { type: projectConstants.REGISTER_FAILURE, error } }
}
