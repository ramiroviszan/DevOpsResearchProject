import { clientConstants } from '../_constants';

export function clients(state = {}, action) {
  switch (action.type) {
    case clientConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case clientConstants.GETALL_SUCCESS:
      return {
        items: action.clients
      };
    case clientConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}