import {
  GET_RIDER_BY_ID_SUCCESS,
  CREATE_DRIVER_SUCCESS,
  GET_DRIVER_BY_ID_SUCCESS
} from './actions';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_RIDER_BY_ID_SUCCESS:
      return { ...state, rider: action.data };
    case CREATE_DRIVER_SUCCESS:
      return { ...state, driver: action.data };
    case GET_DRIVER_BY_ID_SUCCESS:
      return { ...state, driver: action.data };
    default:
      return state;
  }
};
