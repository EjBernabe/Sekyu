import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { EMAIL_CHANGED, PASSWORD_CHANGED, 
            LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER,
        
        NEW_NAME_CHANGED, NEW_EMAIL_CHANGED, NEW_CONTACT_CHANGED, 
            NEW_USERTYPE, NEW_BUILDING, NEW_UNIT } from './types';

export const emailChanged = ( text ) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = ( text ) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword( email, password )
            .then(user => loginUserSuccess( dispatch, user ))
            .catch(() => { loginUserFail( dispatch ) });
    };
};

const loginUserSuccess = ( dispatch, user ) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.adminScene();
};

const loginUserFail = ( dispatch ) => { 
    dispatch({ type: LOGIN_USER_FAIL }); 
};

export const newNormalTextInfo = ( index, text ) => {
    return {
        type: index,
        payload: text
    }
}