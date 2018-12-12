import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NewUserReducer from './NewUserReducer';
import AdvanceFormReducer from './AdvFormReducer';
import VisitorsListReducer from './VisitorsListReducer';

export default combineReducers({
    auth: AuthReducer,
    newUser: NewUserReducer,
    advForm: AdvanceFormReducer,
    visitorsList: VisitorsListReducer
});