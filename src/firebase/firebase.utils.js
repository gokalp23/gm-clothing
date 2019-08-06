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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdTime = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdTime,
                ...additionalData
            })
        } catch (error){
            console.log('Error occured when creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;