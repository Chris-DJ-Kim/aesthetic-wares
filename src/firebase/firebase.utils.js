import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDiPTwzF7q7y2fGzB70XSERHaoj05zzunM",
  authDomain: "aesthetic-wares.firebaseapp.com",
  databaseURL: "https://aesthetic-wares.firebaseio.com",
  projectId: "aesthetic-wares",
  storageBucket: "aesthetic-wares.appspot.com",
  messagingSenderId: "880539905877",
  appId: "1:880539905877:web:989fe0d15c16e041ce49dc",
  measurementId: "G-YZTL5163N1",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userReference = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userReference.get();

  if (!snapShot.exists) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      await userReference.set({
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userReference;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const providerGoogle = new firebase.auth.GoogleAuthProvider();
providerGoogle.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(providerGoogle);

//Facebook login is not active right now and not imported in the sign-in component
const providerFacebook = new firebase.auth.FacebookAuthProvider();
providerFacebook.setCustomParameters({
  prompt: "select_account",
});
export const signInWithFacebook = () => auth.signInWithPopup(providerFacebook);

export default firebase;
