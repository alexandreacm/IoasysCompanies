import {
  ENTERPRISES_LOADING,
  ENTERPRISES_SUCCESS,
  ENTERPRISES_FAILURE
} from '../types';

const INITIAL_STATE = {
  enterprises: [],
  loading: false,
  enterpriseFailure: ''
};

export default function enterprise(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ENTERPRISES_LOADING: {
      return {
        loading: !state.loading
      }
    }
    case ENTERPRISES_SUCCESS: {
      return {
        ...state,
        enterprises: [action.payload.enterprises],
        loading: false
      }
    }
    case ENTERPRISES_FAILURE: {
      return {
        ...state,
        loading: false,
        enterpriseFailure: action.payload
      }
    }
    default:
      return state;
  }
}
