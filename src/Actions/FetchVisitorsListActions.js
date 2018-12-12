import firebase from 'firebase';

import { VISITORS_LIST_FETCH_SUCCESS, EXPECTED_VISITORS_FETCH_SUCCESS
        } from './types';

export const visitorsListFetch = () => {
    const { currentUser } = firebase.auth();

    return ( dispatch ) => {
        firebase.database().ref(`/users/homeowners/${currentUser.uid}/visitorsList`)
            .on('value', snapshot => {
                dispatch({ type: VISITORS_LIST_FETCH_SUCCESS, payload: snapshot.val() });
            })
    };
};

export const expectedVisitorsFetch = () => {
    const { currentUser } = firebase.auth();

    return ( dispatch ) => {
        firebase.database().ref(`/users/homeowners/${currentUser.uid}/visitorsList`)
            .on('value', snapshot => {
                dispatch({ type: EXPECTED_VISITORS_FETCH_SUCCESS, payload: snapshot.val() });
            })
    };
};