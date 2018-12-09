import { ADVANCE_VISITOR, ADVANCE_VISITEE, ADVANCE_DATE, ADVANCE_NOTE } from '../Actions/types';

const INITIAL_STATE = {
    advVisitor: '',
    advVisitee: '',
    advDate: '',
    advNote: '',
    error: '',
    loading: false
};

export default ( state = INITIAL_STATE, action ) => {
    console.log(action.type);
    switch ( action.type ) {
        
        case ADVANCE_VISITOR: 
            return { ...state, advVisitor: action.payload };
        
        case ADVANCE_VISITEE: 
            return { ...state, advVisitee: action.payload };
            
        case ADVANCE_DATE: 
            return { ...state, advDate: action.payload };
            
        case ADVANCE_NOTE: 
            return { ...state, advNote: action.payload };
            
        default: 
            return state;
    }

};