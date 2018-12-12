import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { ADVANCE_VISITOR, ADVANCE_DATE, ADVANCE_NOTE,
            SUBMIT_FORM, SUBMIT_FORM_SUCCESS, SUBMIT_FORM_FAIL, RESET_FORM_STATE
        } from './types';
        
export const advVisitorChanged = ( text ) => {
    return {
        type: ADVANCE_VISITOR,
        payload: text
    };
};

export const advDateChanged = ( text ) => {
    return {
        type: ADVANCE_DATE,
        payload: text
    }
}

export const advNoteChanged = ( text ) => {
    return {
        type: ADVANCE_NOTE,
        payload: text
    }
}

export const submitForm = ({ advVisitor, advDate, advNote, advStatus }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        dispatch({ type: SUBMIT_FORM });

        firebase.database().ref(`/visitors`)
            .push({ 
                    name: advVisitor, 
                    date: advDate, 
                    note: advNote, 
                    status: advStatus, 
                    visitee: currentUser.uid,
                    loggedIn: '',
                    loggedOut: '' })
            .then(() => { submitFormSuccess( dispatch ) })
            .catch(() => { submitFormFail( dispatch ) });
    }
};

const submitFormSuccess = ( dispatch ) => {
    dispatch({ type: SUBMIT_FORM_SUCCESS });
};

const submitFormFail = ( dispatch ) => {
    dispatch({ type: SUBMIT_FORM_FAIL });
};

export const resetForm = () => {
    return {
        type: RESET_FORM_STATE
    }
};

// export const resetForm = () => { 
//     return ( dispatch ) => {   
//         dispatch({
//             type: RESET_FORM_STATE
//         });

//         Actions.homeownerScene();
//     }
//     // return { type: RESET_FORM_STATE }
// }
