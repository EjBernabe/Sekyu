import React, { Component} from 'react';
import { Button, Text } from 'native-base';
import firebase from 'firebase';
// import { Provider } from 'react-redux';

// import configureStore from '../configureStore';
import Login from './Login/Login';

//const store = configureStore();
 
class App extends Component {
    componentWillMount () {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyCMwc-_SxvA_BHzR6nocZmA6GKP2VXv-bw",
                authDomain: "authentication-e3dd4.firebaseapp.com",
                databaseURL: "https://authentication-e3dd4.firebaseio.com",
                projectId: "authentication-e3dd4",
                storageBucket: "authentication-e3dd4.appspot.com",
                messagingSenderId: "1086553064819"
            });
        }
    }
//     <Button full danger onPress={() => firebase.auth().signOut()}>
//     <Text>LOGOUT</Text>
// </Button>

    render() {
        return (
            // <Provider store={ store }>
            <Login />
            // </Provider>
        )
    }
};

export default App;