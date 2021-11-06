import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDusr9NlGzR5C2kbVjqfDmFzzq2WNIn9kM",
  authDomain: "monocle-552fc.firebaseapp.com",
  projectId: "monocle-552fc",
  storageBucket: "monocle-552fc.appspot.com",
  messagingSenderId: "303317676111",
  appId: "1:303317676111:web:0fbea90ea869819a22ba3a",
  measurementId: "G-0V0VJF97R6"
};

firebase.initializeApp(firebaseConfig);

export default firebase;