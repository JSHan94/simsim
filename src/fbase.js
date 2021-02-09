import firebase from "@firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB7B2uMW9j65MLGdFnpTeFQlBYJUxpd6fE",
    authDomain: "nwitter-dbcbb.firebaseapp.com",
    projectId: "nwitter-dbcbb",
    storageBucket: "nwitter-dbcbb.appspot.com",
    messagingSenderId: "963636598794",
    appId: "1:963636598794:web:5b25722ca844af3646e7f3",
    //databaseURL: "gs://nwitter-dbcbb.appspot.com"
  };


firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
