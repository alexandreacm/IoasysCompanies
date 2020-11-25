import Api from '../../../services/Api';
import { formatPrice } from '../../../shared/util/format';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_FAILURE
} from '../types';

export function signInRequest(email, password) {
  return async (dispatch) => {
    try {

      await dispatch({ type: SIGN_IN_REQUEST });

      const response = await Api.post(`users/auth/sign_in`, {
        email,
        password
      });

      signInSuccess(dispatch, response);
    } catch (error) {
      signFailure(dispatch, error);
    }
  }
}


function signInSuccess(dispatch, response) {
  const { uid, client, 'access-token': token } = response.headers;
  const { investor } = response.data;
  let { success } = response.data;

  const profile = {
    ...investor,
    balanceFormatted: formatPrice(investor.balance),
    portfolioValueFormatted: formatPrice(investor.portfolio_value),
  };

  Api.defaults.headers = { uid, client, 'access-token': token };

  dispatch({
    type: SIGN_IN_SUCCESS,
    payload: { token, client, uid, profile, success },
  });

}

function signFailure(dispatch, error) {
  console.log(JSON.stringify(error));
  dispatch({
    type: SIGN_FAILURE,
    payload: error.message
  });
}
