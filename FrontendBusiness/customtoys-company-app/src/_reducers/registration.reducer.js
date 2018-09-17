import { clientConstants, projectConstants } from '../_constants';

export function registration(state = {}, action) {
  switch (action.type) {
    case clientConstants.REGISTER_REQUEST:
      return { registering: true };
    case projectConstants.REGISTER_REQUEST:
      return { registering: true };
    case clientConstants.REGISTER_SUCCESS:
      return {};
    case clientConstants.REGISTER_FAILURE:
      return {};
    case projectConstants.REGISTER_FAILURE:
      return {};
    case projectConstants.REGISTER_SUCCESS:
      return {};
    default:
      return state
  }
}