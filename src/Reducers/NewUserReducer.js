import { NEW_NORMALTEXT_INFO, NEW_NAME_CHANGED, NEW_EMAIL_CHANGED, NEW_CONTACT_CHANGED, 
            NEW_USERTYPE, NEW_BUILDING, NEW_UNIT } from '../Actions/types';

const INITIAL_STATE = { 
    name: '',
    email: '',
    contact: '',
    userType: '',
    loading: false
};

export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        
        case NEW_NAME_CHANGED:
            return { ...state, name: action.payload};

        case NEW_EMAIL_CHANGED:
            return { ...state, email: action.payload};

        case NEW_CONTACT_CHANGED:
            return { ...state, contact: action.payload};

        default:
            return state;
    }
}

