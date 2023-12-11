import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyC-fZcCeOsc6lzu69E2He-2l6MOX3i5s9M",
    authDomain: "noteapp-294e7.firebaseapp.com",
    projectId: "noteapp-294e7",
    storageBucket: "noteapp-294e7.appspot.com",
    messagingSenderId: "1030057792868",
    appId: "1:1030057792868:web:80a257ea01b039ef355671"
});

const FIREBASE = firebase;

export default FIREBASE;