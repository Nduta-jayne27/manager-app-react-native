import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import Router from './Router';



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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
