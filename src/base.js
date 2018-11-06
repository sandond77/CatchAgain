import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDk_9Qsi8fPRSMArubOsfEp6cMl798-lBI",
    authDomain: "catchagain-bc157.firebaseapp.com",
    databaseURL: "https://catchagain-bc157.firebaseio.com",
  };
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;