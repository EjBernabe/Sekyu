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
                apiKey: "AIzaSyBpRskOxo4Nu10Veb-dQSepiqfJVlA2eeE",
                authDomain: "sekyuapp.firebaseapp.com",
                databaseURL: "https://sekyuapp.firebaseio.com",
                projectId: "sekyuapp",
                storageBucket: "sekyuapp.appspot.com",
                messagingSenderId: "548751742349"
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