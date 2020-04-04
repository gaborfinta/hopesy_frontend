import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyBujYsc1S1iHtIktb9EW5BAMBqlAViy3pI",
    authDomain: "hopesy-16904.firebaseapp.com",
    databaseURL: "https://hopesy-16904.firebaseio.com",
    projectId: "hopesy-16904",
    storageBucket: "hopesy-16904.appspot.com",
    messagingSenderId: "888031160213",
    appId: "1:888031160213:web:97663515e5b3a81c9db89c",
    measurementId: "G-0L0C6VRCSF"
  };


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
export function signInWithGoogle() {
    auth.signInWithPopup(provider)
}

