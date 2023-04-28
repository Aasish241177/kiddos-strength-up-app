//import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import 'firebase/compat/storage';
//import { initializeApp } from "firebase/app";
//require("@firebase/firestore");

const firebaseConfig = {
  apiKey: 'AIzaSyCa2bbJcor9-BWT08HEfBRujKQN0LcN-Uw',
  authDomain: 'kiddos-app-bb5e4.firebaseapp.com',
  projectId: 'kiddos-app-bb5e4',
  storageBucket: 'kiddos-app-bb5e4.appspot.com',
  messagingSenderId: '96683258977',
  appId: '1:96683258977:web:8c9b34dfea8d7388bde620',
};

//firebase.initializeApp(firebaseConfig);

//export default firebase.firestore();
if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); } export {firebase};

