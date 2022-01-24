import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
//import {GoogleAuthProvider} from 'firebase/auth'

const config = {
  apiKey: "AIzaSyD4KxyQ0vPnLfFsC1W41wiZgrus8vgn3bU",
  authDomain: "crwn-db-81b12.firebaseapp.com",
  projectId: "crwn-db-81b12",
  storageBucket: "crwn-db-81b12.appspot.com",
  messagingSenderId: "367696480068",
  appId: "1:367696480068:web:6588b32761b7c71e1a7911",
  measurementId: "G-RTB7EQ5V3M",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
