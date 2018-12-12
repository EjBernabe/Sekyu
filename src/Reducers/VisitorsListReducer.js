import {
    EXPECTED_VISITORS_FETCH_SUCCESS, VISITORS_LIST_FETCH_SUCCESS
} from '../Actions/types';

const INITIAL_STATE = {

};

export default ( state = INITIAL_STATE, action ) => {
    switch( action.type ) {
        case EXPECTED_VISITORS_FETCH_SUCCESS: 
            return action.payload;

        default: return state;
    }
}