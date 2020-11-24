import { combineReducers } from 'redux';

import auth from './auth/reducer';
import enterprise from './enterprise/reducer';

export default combineReducers({
    auth,
    enterprise
});