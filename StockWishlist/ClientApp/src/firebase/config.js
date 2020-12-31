import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD3BKvas05DGwtn-_UVp84zYxvAmyz0QhI",
    authDomain: "stock-wishlist.firebaseapp.com",
    projectId: "stock-wishlist",
    storageBucket: "stock-wishlist.appspot.com",
    messagingSenderId: "779626104057",
    appId: "1:779626104057:web:c6b2083002bf39b7370e28"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };