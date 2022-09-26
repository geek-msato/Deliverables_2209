import firebase from 'firebase/compat/app'
import "firebase/compat/auth";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCo2OhdLWuUnaEy-iNhKAFOSVJEzyqvM_8",
  authDomain: "household-demo-bb4e3.firebaseapp.com",
  databaseURL: "https://household-demo-bb4e3.firebaseio.com",
  projectId: "household-demo-bb4e3",
  storageBucket: "household-demo-bb4e3.appspot.com",
  messagingSenderId: "328954562192"
});

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db }
