import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBhFwmgYWuh5dsh0DGWRZ9WC8I7y8sOM5M",
  authDomain: "udaciouscms-2f090.firebaseapp.com",
  databaseURL: "https://udaciouscms-2f090.firebaseio.com",
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
