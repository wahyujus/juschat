import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyAfi0qbl-jCXbQjHypY0iPD1a_uIjMKxH8",
  authDomain: "juschatv.firebaseapp.com",
  databaseURL: "https://juschatv.firebaseio.com",
  projectId: "juschatv",
  storageBucket: "juschatv.appspot.com",
  messagingSenderId: "321459112998",
  appId: "1:321459112998:web:fb76304620e3464ac9aae7",
  measurementId: "G-LFNQ5BX83W"
};
firebase.initializeApp(config);

export default firebase;
