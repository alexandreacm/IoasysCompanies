import Api from '../../../services/Api';

import {
  ENTERPRISES_SUCCESS,
  ENTERPRISES_FAILURE,
  ENTERPRISES_LOADING
} from '../types';

export function loadEnterprises() {
  try {

    return async (dispatch) => {
      dispatch({ type: ENTERPRISES_LOADING })

      const response = await Api.get('enterprises');
      enterprisesSuccess(dispatch, response)
    }

  } catch (error) {
    enterprisesFailure(dispatch, error);
  }
}

function enterprisesSuccess(dispatch, response) {
  const { enterprises } = response.data;
  dispatch({ type: ENTERPRISES_SUCCESS, payload: enterprises })
}

function enterprisesFailure(dispatch, error) {
  //Alert.Alert('Erro ao carregar os dados', 'Tente novamente mais tarde');
  dispatch({ type: ENTERPRISES_FAILURE, payload: error.message });
}
