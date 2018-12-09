import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NewUserReducer from './NewUserReducer';
import AdvanceFormReducer from './AdvFormReducer';

export default combineReducers({
    auth: AuthReducer,
    newUser: NewUserReducer,
    advForm: AdvanceFormReducer
});