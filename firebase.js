import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDuWsZ3j1m1vw3MM-YGZx1trPd-OT9xzdA",
    authDomain: "facebook-c8699.firebaseapp.com",
    projectId: "facebook-c8699",
    storageBucket: "facebook-c8699.appspot.com",
    messagingSenderId: "432072892032",
    appId: "1:432072892032:web:898fd4d731b4244feb1065"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  const storage = firebase.storage();

  export { db, storage };