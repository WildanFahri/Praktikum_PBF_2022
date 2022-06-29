import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const settings = { timestampsInSnapshots: true };
const config = {
    apiKey: "AIzaSyBJto5AisMWo9HYkl7wdnp8JSOb3j4HtxU",
    authDomain: "reactfirestore-b395c.firebaseapp.com",
    projectId: "reactfirestore-b395c",
    storageBucket: "reactfirestore-b395c.appspot.com",
    messagingSenderId: "662154614113",
    appId: "1:662154614113:web:2c98aeaa02e7a0a8306120",
    measurementId: "G-C8CXTNMWFG"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);
export default firebase;