import firebase from "firebase/app";
import 'firebase/firestore';
require('firebase/auth')

const firebaseConfig = {
    apiKey: "AIzaSyCXF25Dvm4n6zuwnsLhl9PkNxF6-4SoBqA",
    authDomain: "cycling-pins.firebaseapp.com",
    projectId: "cycling-pins",
    storageBucket: "cycling-pins.appspot.com",
    messagingSenderId: "327376867360",
    appId: "1:327376867360:web:03cd11b16b07f14d116c45",
    measurementId: "G-SJS6CQE5TW"
};
const settings = { timestampsInSnapshots: true }

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const auth = firebase.auth();
window.firebase = firebase;

export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { email, displayName, photoURL } = user;
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                ...additionalData
            });
        } catch (error) {
            console.error("Error creating user document", error);
        }
    }
    return getUserDocument(user.uid);
};
const getUserDocument = async uid => {
    if (!uid) return null;
    try {
        const userDocument = await firestore.doc(`users/${uid}`).get();
        return {
            uid,
            ...userDocument.data()
        };
    } catch (error) {
        console.error("Error fetching user", error);
    }
};



export default firebase;
