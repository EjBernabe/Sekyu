import { ADVANCE_VISITOR, ADVANCE_DATE, ADVANCE_NOTE, 
            SUBMIT_FORM, SUBMIT_FORM_SUCCESS, SUBMIT_FORM_FAIL, 
                RESET_FORM_STATE } from '../Actions/types';

const INITIAL_STATE = {
    advVisitor: '',
    advDate: '',
    advNote: '',
    advStatus: 'listed', 
        // advanceListed - DEFAULT / NILISTA PALANG
        // GAWIN TONG LISTED LANG
        // arrived - CHANGE WHEN SCANNED BY GUARD / KAKADATING PALANG 
        // accepted -WHEN VISITEE CONFIRMS / DAPAT MAPUNTA NA SA LOGS AT MALOG IN NA SIYA BILANG VISITOR

    success: false,
    failed: false,
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
            return { ...state, loading: true, error: '' };
        
        case SUBMIT_FORM_SUCCESS:
            return { ...state, ...INITIAL_STATE, success: true };

        case SUBMIT_FORM_FAIL:
            return { ...state,
                        error: "Something went wrong. Try again.", 
                        loading: false 
                    };
        
        case RESET_FORM_STATE:
            return { ...state, ...INITIAL_STATE };
            
        default: 
            return state;
    }

};