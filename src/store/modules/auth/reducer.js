import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_FAILURE
} from '../types';

const INITIAL_STATE = {
  token: '',
  client: '',
  uid: '',
  profile: null,
  signed: false,
  loading: false,
  errorSign: ''
}

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_IN_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case SIGN_IN_SUCCESS: {
      return {
        ...state,
        token: action.payload.token,
        client: action.payload.client,
        uid: action.payload.uid,
        profile: action.payload.profile,
        signed: true,
        loading: false
      }
    }
    case SIGN_FAILURE: {
      return {
        ...state,
        loading: false,
        signed: false,
        errorSign: action.payload
      }
    }
    default:
      return state;
  }
}
