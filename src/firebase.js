// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAuBfSKJpK3jwEtzWzgLkXm3U1d7azPvHk",
    authDomain: "todo-app-react-bb231.firebaseapp.com",
    projectId: "todo-app-react-bb231",
    storageBucket: "todo-app-react-bb231.appspot.com",
    messagingSenderId: "322471779140",
    appId: "1:322471779140:web:0f809532cfa5357ba3d511",
    measurementId: "G-F0249EM4TH"
});

const db = firebaseApp.firestore();

export {db};