import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCn47uL-JOZIjFiUyrsXp75DtM63s5WUFc",
    authDomain: "gm-database.firebaseapp.com",
    databaseURL: "https://gm-database.firebaseio.com",
    projectId: "gm-database",
    storageBucket: "",
    messagingSenderId: "95752776821",
    appId: "1:95752776821:web:36643c35ce1d477f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;