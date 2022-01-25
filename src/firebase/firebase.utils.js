import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { signInWithPopup } from "@firebase/auth";
//import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'

const config = {
  apiKey: "AIzaSyD4KxyQ0vPnLfFsC1W41wiZgrus8vgn3bU",
  authDomain: "crwn-db-81b12.firebaseapp.com",
  projectId: "crwn-db-81b12",
  storageBucket: "crwn-db-81b12.appspot.com",
  messagingSenderId: "367696480068",
  appId: "1:367696480068:web:6588b32761b7c71e1a7911",
  measurementId: "G-RTB7EQ5V3M",
};

export const createUserProfileDocument = async ({ userAuth, additionalData }) => {
  if (!userAuth) {
    return;
  }
  //document reference is used to perform crud application
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
};

export default firebase;
