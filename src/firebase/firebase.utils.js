import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB2T0vHSBwfj6wfkHdyIQ6oGWq34a0Ia1I",
    authDomain: "e-com-3ad95.firebaseapp.com",
    projectId: "e-com-3ad95",
    storageBucket: "e-com-3ad95.appspot.com",
    messagingSenderId: "883986469766",
    appId: "1:883986469766:web:ec42180b78578eaeead207",
    measurementId: "G-DXJ7D37FRJ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;