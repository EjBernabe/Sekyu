import { ADVANCE_VISITOR, ADVANCE_DATE, ADVANCE_NOTE, 
            SUBMIT_FORM, SUBMIT_FORM_SUCCESS, SUBMIT_FORM_FAIL } from '../Actions/types';

const INITIAL_STATE = {
    advVisitor: '',
    advDate: undefined,
    advNote: '',
    advStatus: false, 
    success: false,
    error: '',
    loading: false
};

export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        
        case ADVANCE_VISITOR: 
            return { ...state, advVisitor: action.payload };
            
        case ADVANCE_DATE: 
            return { ...state, advDate: action.payload };
            
        case ADVANCE_NOTE: 
            return { ...state, advNote: action.payload };
            
        case SUBMIT_FORM:
            return { ...state, loading: true, error: ''};
        
        case SUBMIT_FORM_SUCCESS:
            return { ...state, ...INITIAL_STATE, success: true };

        case SUBMIT_FORM_FAIL:
            return { ...state, 
                        error: "Something went wrong. Please try again.", 
                        advVisitor: '', 
                        advDate: '',
                        advNote: '',
                        success: false,
                        loading: false 
                    };
            
        default: 
            return state;
    }

};