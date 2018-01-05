import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';



class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyCGA75jXbiYUw2FbGDB0RvdYAb-9Voz1J4",
            authDomain: "manager-a8fa4.firebaseapp.com",
            databaseURL: "https://manager-a8fa4.firebaseio.com",
            projectId: "manager-a8fa4",
            storageBucket: "manager-a8fa4.appspot.com",
            messagingSenderId: "650117483282"
          };
          firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
