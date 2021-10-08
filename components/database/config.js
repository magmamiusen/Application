import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const config = {
  apiKey: "AIzaSyDHF2JXEaeQ2p_RjiPJBkORE50RRmQhhBU",
  authDomain: "application-8aa90.firebaseapp.com",
  projectId: "application-8aa90",
  storageBucket: "application-8aa90.appspot.com",
  messagingSenderId: "864511441334",
  appId: "1:864511441334:web:a4b4441b8813a150eba917",
  measurementId: "G-FMPRN55KT2"
};

const app = firebase.initializeApp(config);
export const dataBase = firebase.firestore(app);
export const storage = firebase.storage(app);