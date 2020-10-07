import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from "./firebase";
import { firestoreReducer } from 'redux-firestore';
import 'firebase/auth';
import './index.css';

const store = createStore(firestoreReducer);
const rrfProps = {
  firebase,
  config: {
    userProfile: "users",
    useFirestoreForProfile: true,
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
};
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
)